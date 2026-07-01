import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function FreeAnalysisForm() {
  return (
    <LeadCaptureForm
      formId="analysis-form"
      eyebrow="Ücretsiz Analiz Formu"
      title="Ücretsiz analiz talep edin."
      description="Sitenizi teknik yapı, mesaj netliği ve dönüşüm potansiyeli açısından inceleyip öncelikli geliştirme başlıklarını sizinle paylaşalım."
      submitLabel="Analiz Talep Et"
      successMessage="Talebiniz alındı. Mevcut sitenizi inceleyip öncelikli notlarla size kısa süre içinde dönüş yapacağız."
      helperText="Talebiniz teknik inceleme için alınır. Uygun başlıklarla kısa bir yol haritası paylaşılır."
      source="free_analysis"
      requireWebsite
    />
  );
}
