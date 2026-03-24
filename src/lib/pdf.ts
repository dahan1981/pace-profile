import jsPDF from 'jspdf';
import { PROFILES } from '@/data/profiles';
import { AssessmentResult } from '@/lib/scoring';
import { normalizeLegacyText } from '@/lib/text-fixes';

const addWrappedText = (
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight = 7,
) => {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
};

export const downloadResultPdf = (result: AssessmentResult) => {
  const primary = PROFILES[result.primaryProfile];
  const secondary = PROFILES[result.secondaryProfile];
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  let y = 18;

  doc.setFillColor(16, 54, 128);
  doc.rect(0, 0, 210, 12, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(22, 28, 45);
  doc.text('Relatório PACE', 16, y);

  y += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(90, 100, 120);
  doc.text(`Gerado em ${new Date().toLocaleDateString('pt-BR')}`, 16, y);

  y += 14;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(16, 54, 128);
  doc.text(primary.name, 16, y);

  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(22, 28, 45);
  doc.text(`${result.scores[0].percentage}% de predominância`, 16, y);

  y += 10;
  doc.setFontSize(11);
  y = addWrappedText(doc, normalizeLegacyText(primary.fullDescription), 16, y, 178);

  y += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Leitura rápida', 16, y);

  y += 7;
  doc.setFont('helvetica', 'normal');
  y = addWrappedText(
    doc,
    `Você combina ${primary.name.toLowerCase()} com ${secondary.name.toLowerCase()}. O perfil secundário amplia sua forma de decidir, se relacionar e executar.`,
    16,
    y,
    178,
  );

  y += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Distribuição dos perfis', 16, y);

  y += 8;
  doc.setFont('helvetica', 'normal');
  result.scores.forEach((score) => {
    doc.text(`${score.name}: ${score.percentage}%`, 20, y);
    y += 6;
  });

  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('Pontos fortes', 16, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  primary.strengths.forEach((item) => {
    y = addWrappedText(doc, `• ${normalizeLegacyText(item)}`, 20, y, 174, 6);
  });

  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('Pontos de atenção', 16, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  primary.attentionPoints.forEach((item) => {
    y = addWrappedText(doc, `• ${normalizeLegacyText(item)}`, 20, y, 174, 6);
  });

  if (y > 250) {
    doc.addPage();
    y = 20;
  } else {
    y += 4;
  }

  doc.setFont('helvetica', 'bold');
  doc.text('Áreas de desenvolvimento', 16, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  primary.developmentAreas.forEach((item) => {
    y = addWrappedText(doc, `• ${normalizeLegacyText(item)}`, 20, y, 174, 6);
  });

  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('Ambientes ideais', 16, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  primary.idealEnvironments.forEach((item) => {
    y = addWrappedText(doc, `• ${normalizeLegacyText(item)}`, 20, y, 174, 6);
  });

  const fileName = `relatorio-pace-${primary.key}-${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(fileName);
};
