import {
  Button,
  Column,
  Input,
  Row,
  Textarea,
  useToast,
} from "@/once-ui/components";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  contactMessage: string;
}

interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  contactMessage?: string;
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    contactMessage: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    contactMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const { addToast } = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    if (errors) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Jméno je povinné";
    if (!formData.surname.trim()) newErrors.surname = "Příjmení je povinné";
    if (!formData.email.trim()) {
      newErrors.email = "Email je povinný";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Neplatný email";
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{9}$/;
      const cleanedPhone = formData.phone.replace(/[-\s]/g, "");

      if (!phoneRegex.test(cleanedPhone)) {
        newErrors.phone =
          "Neplatný telefonní formát. Použijte 123456789 nebo +420 123 456 789";
      } else if (cleanedPhone.length > 15) {
        newErrors.phone = "Telefonní číslo je příliš dlouhé";
      }
    }

    if (!formData.contactMessage.trim())
      newErrors.contactMessage = "Zpráva je povinná";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast({
        variant: "danger",
        message: "Please fix",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      emailjs.init(process.env.EMAILJS_PUBLIC_KEY || "E7C1Iy6Kh48WB3aZ3");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        name: formData.name,
        surname: formData.surname,
        message: formData.contactMessage,
      };

      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || "service_2vxct33",
        process.env.EMAILJS_TEMPLATE_ID || "template_drx002a",
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          contactMessage: "",
        });
      }
      console.log(formData);

      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        contactMessage: "",
      });

      addToast({
        variant: "success",
        message: "Form submitted successfully!",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
    >
      <Column fillWidth gap="8">
        <Row gap="4">
          <Input
            id="name"
            label="Jméno"
            value={formData.name}
            onChange={handleChange}
            labelAsPlaceholder={false}
            errorMessage={errors.name}
          />
          <Input
            id="surname"
            label="Příjmení"
            value={formData.surname}
            onChange={handleChange}
            errorMessage={errors.surname}
            labelAsPlaceholder={false}
          />
        </Row>
        <Row>
          <Input
            id="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            errorMessage={errors.email}
            labelAsPlaceholder={false}
            type="email"
          />
        </Row>
        <Row>
          <Input
            id="phone"
            label="Telefonní číslo"
            value={formData.phone}
            errorMessage={errors.phone}
            onChange={handleChange}
            labelAsPlaceholder={false}
            type="tel"
            inputMode="tel"
            onKeyDown={(e) => {
              // Additional prevention for non-allowed keys
              if (!/[0-9+\-\s]|Backspace|Delete|Arrow/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </Row>
        <Row>
          <Textarea
            id="contactMessage"
            label="Napište, o co se jedná"
            lines={3}
            description=""
            labelAsPlaceholder={false}
            resize="vertical"
            value={formData.contactMessage}
            onChange={handleChange}
            errorMessage={errors.contactMessage}
          />
        </Row>
        <Button
          id="sendMail"
          arrowIcon
          fillWidth
          type="submit"
          label={isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
        />
      </Column>
    </form>
  );
};
