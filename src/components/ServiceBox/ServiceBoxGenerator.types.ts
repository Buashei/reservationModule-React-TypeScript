export interface FormDataContext {
  formData: { title: string };
  setFormData: React.Dispatch<React.SetStateAction<{ title: string }>>;
}
