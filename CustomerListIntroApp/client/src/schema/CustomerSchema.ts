import { object, string } from "yup";

const phoneRegExp = /^[0-9]{10}$/;
const postalCodeRegExp = /^\d{5}$/;

let CustomerSchema = object({
  companyName: string().required("Şirket adı giriniz"),
  contactName: string().required("İletişim adı giriniz"),
  contactTitle: string().required("İletişim başlığı giriniz"),
  address: object().shape({
    street: string().required("Adres için sokak giriniz"),
    city: string().required("Adres için şehir giriniz"),
    country: string().required("Adres için ülke giriniz"),
    postalCode: string()
      .matches(postalCodeRegExp, "Posta kodu geçersiz")
      .required("Adres için posta kodu giriniz"),
    phone: string()
      .matches(phoneRegExp, "Telefon numarası geçersiz")
      .required("Adres için telefon numarası giriniz"),
  }),
});

export default CustomerSchema;
