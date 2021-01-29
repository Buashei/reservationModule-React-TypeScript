export type contentSelectServiceProps = {
  onClose: () => void;
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
};
