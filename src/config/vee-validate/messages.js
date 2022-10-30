import { defineRule, configure } from "vee-validate";
import { alpha, required } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

defineRule("required", required);
defineRule("email", required);
defineRule("required", required);
defineRule("alpha", alpha);

configure({
  // Generates an English message locale generator
  generateMessage: localize("en", {
    messages: {
      required: "გთხოვთ შეავსოთ მოცემული ველი",
      email: "თქვენს მიერ შეყვანილი ტექსტი არ აკმაყოფილებს მეილის ფორმატს",
      min: "{field} უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან",
      alpha: "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
    },
    names: {
      lastname: "გვარი",
      name: "სახელი",
      email: "მეილი",
    },
  }),
});
