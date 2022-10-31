import { defineRule } from "vee-validate";
import { email, required, min } from "@vee-validate/rules";

defineRule("email", email);
defineRule("required", required);
defineRule("min", min);

defineRule("redberry", (value) => {
  if (!value.endsWith("@redberry.ge")) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
