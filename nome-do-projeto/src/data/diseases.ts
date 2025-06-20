export type Disease = {
  name: string;
  symptoms: string[];
  description: string;
  urgent?: boolean;
};

export const DISEASES: Disease[] = [
  {
    name: "Gripe (Influenza)",
    symptoms: ["Febre", "Tosse", "Dor de garganta", "Coriza", "Dor de cabeça", "Dores musculares", "Fadiga"],
    description: "Doença viral comum. Repouso e hidratação são recomendados. Procure um médico se houver falta de ar ou sintomas persistentes."
  },
  {
    name: "Resfriado Comum",
    symptoms: ["Espirros", "Coriza", "Congestão nasal", "Dor de garganta", "Tosse", "Dor de cabeça"],
    description: "Infecção viral leve do trato respiratório superior. Sintomas geralmente desaparecem em alguns dias."
  },
  {
    name: "COVID-19",
    symptoms: ["Febre", "Tosse", "Falta de ar", "Fadiga", "Perda de olfato", "Dor de cabeça", "Dores musculares", "Dor de garganta"],
    description: "Doença viral causada pelo coronavírus. Procure atendimento se houver falta de ar ou agravamento dos sintomas.",
    urgent: true
  },
  {
    name: "Sinusite",
    symptoms: ["Dor facial", "Congestão nasal", "Secreção nasal", "Dor de cabeça", "Febre"],
    description: "Inflamação dos seios da face. Se persistir por mais de 7 dias, procure um médico."
  },
  {
    name: "Rinite Alérgica",
    symptoms: ["Espirros", "Coriza", "Coceira no nariz", "Congestão nasal", "Olhos lacrimejantes"],
    description: "Alergia que afeta o nariz e os olhos. Evite alérgenos e use medicação conforme orientação."
  },
  {
    name: "Otite",
    symptoms: ["Dor de ouvido", "Febre", "Perda auditiva", "Irritabilidade"],
    description: "Infecção no ouvido. Procure um médico para avaliação, principalmente em crianças."
  },
  {
    name: "Amigdalite",
    symptoms: ["Dor de garganta", "Febre", "Dificuldade para engolir", "Mal-estar"],
    description: "Inflamação das amígdalas, pode ser viral ou bacteriana. Procure um médico se houver pus ou sintomas intensos."
  },
  {
    name: "Faringite",
    symptoms: ["Dor de garganta", "Febre", "Tosse", "Dor ao engolir"],
    description: "Inflamação da faringe, geralmente viral. Repouso e hidratação são recomendados."
  },
  {
    name: "Bronquite",
    symptoms: ["Tosse", "Expectoração", "Fadiga", "Falta de ar", "Desconforto no peito"],
    description: "Inflamação dos brônquios, causada por vírus, bactérias ou irritantes."
  },
  {
    name: "Pneumonia",
    symptoms: ["Febre", "Tosse", "Falta de ar", "Dor no peito", "Escarro", "Fadiga"],
    description: "Infecção pulmonar grave. Procure atendimento médico, especialmente se houver falta de ar ou dor no peito.",
    urgent: true
  },
  {
    name: "Asma",
    symptoms: ["Falta de ar", "Chiado no peito", "Tosse", "Aperto no peito"],
    description: "Doença crônica das vias aéreas. Use medicação prescrita e evite gatilhos."
  },
  {
    name: "DPOC (Enfisema/Bronquite crônica)",
    symptoms: ["Falta de ar", "Tosse crônica", "Expectoração"],
    description: "Doença pulmonar obstrutiva crônica, ligada ao tabagismo. Controle com medicamentos e evite fumaça."
  },
  {
    name: "Infecção Urinária",
    symptoms: ["Dor ao urinar", "Urgência urinária", "Aumento da frequência urinária", "Dor abdominal baixa", "Febre"],
    description: "Infecção do trato urinário. Procure um médico para tratamento adequado."
  },
  {
    name: "Cistite",
    symptoms: ["Dor ao urinar", "Urina turva", "Urgência urinária", "Dor abdominal baixa"],
    description: "Infecção da bexiga. Beber bastante água e buscar avaliação médica."
  },
  {
    name: "Gastrite",
    symptoms: ["Dor abdominal", "Náusea", "Vômito", "Azia", "Queimação estomacal"],
    description: "Inflamação do estômago. Evite alimentos irritantes e procure avaliação se persistir."
  },
  {
    name: "Úlcera gástrica",
    symptoms: ["Dor abdominal", "Azia", "Náusea", "Vômito", "Perda de peso"],
    description: "Ferida no estômago. Procure um gastroenterologista para diagnóstico e tratamento."
  },
  {
    name: "Gastroenterite",
    symptoms: ["Diarreia", "Náusea", "Vômito", "Dor abdominal", "Febre"],
    description: "Infecção do trato gastrointestinal. Hidratação é fundamental, procure um médico se persistir."
  },
  {
    name: "Apendicite",
    symptoms: ["Dor abdominal intensa", "Náusea", "Vômito", "Febre", "Dor no lado direito inferior"],
    description: "Emergência cirúrgica. Procure atendimento médico imediato.",
    urgent: true
  },
  {
    name: "Hepatite Viral",
    symptoms: ["Icterícia", "Urina escura", "Fezes claras", "Dor abdominal", "Náusea", "Fadiga"],
    description: "Infecção do fígado. Procure avaliação médica."
  },
  {
    name: "Diabetes Mellitus",
    symptoms: ["Sede excessiva", "Urina frequente", "Fome excessiva", "Perda de peso", "Fadiga"],
    description: "Doença metabólica crônica. Controle com dieta, exercícios e medicação."
  },
  {
    name: "Hipertensão Arterial",
    symptoms: ["Dor de cabeça", "Tontura", "Zumbido no ouvido", "Fadiga", "Visão turva"],
    description: "Pode ser assintomática. Meça regularmente a pressão arterial."
  },
  {
    name: "Infarto Agudo do Miocárdio (IAM)",
    symptoms: ["Dor no peito", "Falta de ar", "Suor frio", "Náusea", "Tontura"],
    description: "Emergência médica. Procure atendimento urgente.",
    urgent: true
  },
  {
    name: "AVC (Acidente Vascular Cerebral)",
    symptoms: ["Fraqueza em um lado do corpo", "Dificuldade para falar", "Alteração da visão", "Dor de cabeça intensa"],
    description: "Emergência médica. Procure atendimento urgente.",
    urgent: true
  },
  {
    name: "Enxaqueca",
    symptoms: ["Dor de cabeça intensa", "Náusea", "Sensibilidade à luz", "Sensibilidade a sons"],
    description: "Crise de dor de cabeça. Procure um neurologista se frequente."
  },
  {
    name: "Dengue",
    symptoms: ["Febre alta", "Dor de cabeça", "Dor atrás dos olhos", "Dores musculares", "Manchas na pele"],
    description: "Doença viral transmitida pelo mosquito. Procure atendimento se houver sangramentos ou dor abdominal intensa."
  },
  {
    name: "Zika",
    symptoms: ["Febre baixa", "Manchas vermelhas", "Dor nas articulações", "Conjuntivite"],
    description: "Doença viral transmitida por mosquito. Hidrate-se e procure avaliação médica se necessário."
  },
  {
    name: "Chikungunya",
    symptoms: ["Febre alta", "Dores articulares intensas", "Manchas na pele", "Dor muscular"],
    description: "Doença viral. Repouso e hidratação são recomendados."
  },
  {
    name: "Alergia Alimentar",
    symptoms: ["Coceira", "Inchaço", "Urticária", "Náusea", "Vômito", "Diarreia"],
    description: "Reação alérgica a alimentos. Em caso de dificuldade para respirar, procure atendimento urgente.",
    urgent: true
  },
  {
    name: "Dermatite Atópica",
    symptoms: ["Coceira", "Vermelhidão", "Descamação da pele"],
    description: "Doença de pele crônica. Hidrate a pele e evite irritantes."
  },
  {
    name: "Psoríase",
    symptoms: ["Placas avermelhadas", "Descamação", "Coceira"],
    description: "Doença de pele crônica. Procure um dermatologista para tratamento."
  },
  {
    name: "Lombalgia",
    symptoms: ["Dor nas costas", "Rigidez", "Limitação de movimentos"],
    description: "Dor lombar. Repouso e fisioterapia podem ajudar."
  },
  {
    name: "Hérnia de Disco",
    symptoms: ["Dor nas costas", "Dor irradiando para as pernas", "Dormência"],
    description: "Problema na coluna. Procure um ortopedista para avaliação."
  },
  {
    name: "Artrite Reumatoide",
    symptoms: ["Dor nas articulações", "Inchaço", "Rigidez matinal", "Vermelhidão"],
    description: "Doença autoimune. Procure um reumatologista para tratamento."
  },
  {
    name: "Osteoartrite",
    symptoms: ["Dor nas articulações", "Rigidez", "Inchaço", "Limitação de movimento"],
    description: "Desgaste das articulações. Exercícios e fisioterapia ajudam no controle."
  },
  {
    name: "Lúpus Eritematoso Sistêmico",
    symptoms: ["Manchas na pele", "Dor nas articulações", "Febre", "Fadiga"],
    description: "Doença autoimune. Procure um reumatologista."
  },
  {
    name: "Fibromialgia",
    symptoms: ["Dor muscular difusa", "Fadiga", "Distúrbios do sono"],
    description: "Dor crônica generalizada. Tratamento multidisciplinar."
  },
  {
    name: "Depressão",
    symptoms: ["Tristeza", "Fadiga", "Alteração do sono", "Alteração do apetite", "Perda de interesse"],
    description: "Transtorno de humor. Procure um psicólogo ou psiquiatra."
  },
  {
    name: "Ansiedade",
    symptoms: ["Preocupação excessiva", "Fadiga", "Insônia", "Irritabilidade"],
    description: "Transtorno de ansiedade. Procure suporte psicológico."
  },
  {
    name: "Hipotireoidismo",
    symptoms: ["Fadiga", "Ganho de peso", "Pele seca", "Queda de cabelo", "Intolerância ao frio"],
    description: "Distúrbio hormonal. Procure um endocrinologista."
  },
  {
    name: "Hipertireoidismo",
    symptoms: ["Perda de peso", "Ansiedade", "Palpitação", "Sudorese", "Insônia"],
    description: "Distúrbio hormonal. Procure um endocrinologista."
  },
  {
    name: "Anemia Ferropriva",
    symptoms: ["Fadiga", "Palidez", "Tontura", "Falta de ar", "Palpitação"],
    description: "Déficit de ferro. Procure um médico para investigação."
  },
  {
    name: "Infecção de Pele (Celulite)",
    symptoms: ["Vermelhidão", "Inchaço", "Dor local", "Febre"],
    description: "Infecção cutânea. Procure um médico se houver febre ou piora dos sintomas."
  },
  {
    name: "Varicela (Catapora)",
    symptoms: ["Manchas vermelhas", "Coceira", "Febre", "Bolhas"],
    description: "Doença viral comum em crianças. Procure orientação médica."
  },
  {
    name: "Sarampo",
    symptoms: ["Febre alta", "Manchas vermelhas", "Tosse", "Coriza", "Conjuntivite"],
    description: "Doença viral contagiosa. Procure atendimento médico."
  },
  {
    name: "Rubéola",
    symptoms: ["Manchas vermelhas", "Febre baixa", "Dor nas articulações"],
    description: "Doença viral. Procure um médico para diagnóstico."
  },
  {
    name: "Caxumba",
    symptoms: ["Inchaço das glândulas", "Dor ao mastigar", "Febre"],
    description: "Doença viral. Repouso e hidratação recomendados."
  },
  {
    name: "Mononucleose",
    symptoms: ["Febre", "Dor de garganta", "Aumento dos linfonodos", "Fadiga"],
    description: "Doença viral. Repouso e hidratação."
  },
  {
    name: "Herpes Simples",
    symptoms: ["Vesículas doloridas", "Coceira", "Ardência"],
    description: "Feridas na boca ou genital. Procure orientação médica."
  },
  {
    name: "HPV",
    symptoms: ["Verrugas genitais", "Coceira", "Lesões"],
    description: "Doença sexualmente transmissível. Procure um ginecologista ou urologista."
  },
  {
    name: "Candidíase",
    symptoms: ["Coceira genital", "Corrimento branco", "Ardência"],
    description: "Infecção fúngica comum. Procure orientação médica."
  },
  {
    name: "Sífilis",
    symptoms: ["Feridas genitais", "Manchas na pele", "Febre", "Dor de cabeça"],
    description: "IST. Procure um médico para tratamento adequado."
  }
];