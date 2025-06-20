import type { Disease } from "../data/diseases";

// Função que retorna as doenças ordenadas por número de sintomas batendo com os selecionados
export function getDiagnoses(selectedSymptoms: string[], diseases: Disease[]) {
  if (selectedSymptoms.length === 0) return [];
  // Calcule um score de match para cada doença
  const matches = diseases
    .map((disease) => {
      const matched = disease.symptoms.filter((s) =>
        selectedSymptoms.includes(s)
      );
      return {
        disease,
        score: matched.length / disease.symptoms.length,
        nMatched: matched.length
      };
    })
    // Ordene por maior score e mais sintomas batendo
    .filter((item) => item.nMatched > 0)
    .sort((a, b) => {
      if (b.score === a.score) return b.nMatched - a.nMatched;
      return b.score - a.score;
    });
  // Retorne apenas as doenças mais prováveis
  return matches.slice(0, 5).map((item) => item.disease);
}