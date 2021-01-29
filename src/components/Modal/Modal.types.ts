export type ToShowModalProps = {
  show: boolean;
  onClose: () => void;
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
};
