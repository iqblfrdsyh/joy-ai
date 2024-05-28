const dataQuestions = [
  {
    id: 1,
    question: "How to make CV?",
  },
  {
    id: 2,
    question: "Bagaimana cara membuat CV?",
  },
  {
    id: 3,
    question: "What is the best programming language for beginners?",
  },
  {
    id: 4,
    question: "Apa bahasa pemrograman terbaik untuk pemula?",
  },
  {
    id: 5,
    question: "How to cook fried rice?",
  },
  {
    id: 6,
    question: "Bagaimana cara memasak nasi goreng?",
  },
  {
    id: 7,
    question: "How to learn a new language effectively?",
  },
  {
    id: 8,
    question: "Bagaimana cara belajar bahasa baru dengan efektif?",
  },
  {
    id: 9,
    question: "What are the benefits of exercising daily?",
  },
  {
    id: 10,
    question: "Apa manfaat berolahraga setiap hari?",
  },
  {
    id: 11,
    question: "How to build a website from scratch?",
  },
  {
    id: 12,
    question: "Bagaimana cara membuat website dari awal?",
  },
  {
    id: 13,
    question: "What are the key ingredients for a successful startup?",
  },
  {
    id: 14,
    question: "Apa saja bahan utama untuk startup yang sukses?",
  },
  {
    id: 15,
    question: "How to improve your public speaking skills?",
  },
  {
    id: 16,
    question:
      "Bagaimana cara meningkatkan keterampilan berbicara di depan umum?",
  },
  {
    id: 17,
    question: "What is the best way to prepare for a job interview?",
  },
  {
    id: 18,
    question:
      "Apa cara terbaik untuk mempersiapkan diri untuk wawancara kerja?",
  },
  {
    id: 19,
    question: "How to stay motivated and productive while working from home?",
  },
  {
    id: 20,
    question:
      "Bagaimana cara tetap termotivasi dan produktif saat bekerja dari rumah?",
  },
  {
    id: 21,
    question: "How to start a successful blog?",
  },
  {
    id: 22,
    question: "Apa cara memulai blog yang sukses?",
  },
  {
    id: 23,
    question: "What is the meaning of life?",
  },
  {
    id: 24,
    question: "Apa arti dari hidup?",
  },
  {
    id: 25,
    question: "How to grow a garden in a small space?",
  },
  {
    id: 26,
    question: "Bagaimana cara menanam kebun di ruang kecil?",
  },
  {
    id: 27,
    question: "What are the benefits of reading books?",
  },
  {
    id: 28,
    question: "Apa manfaat membaca buku?",
  },
  {
    id: 29,
    question: "How to reduce stress and anxiety?",
  },
  {
    id: 30,
    question: "Bagaimana cara mengurangi stres dan kecemasan?",
  },
  {
    id: 31,
    question: "What are the advantages of online learning?",
  },
  {
    id: 32,
    question: "Apa keuntungan dari pembelajaran online?",
  },
  {
    id: 33,
    question: "How to organize your time effectively?",
  },
  {
    id: 34,
    question: "Bagaimana cara mengatur waktu dengan efektif?",
  },
  {
    id: 35,
    question: "What is the impact of social media on society?",
  },
  {
    id: 36,
    question: "Apa dampak media sosial bagi masyarakat?",
  },
  {
    id: 37,
    question: "How to start a small business?",
  },
  {
    id: 38,
    question: "Bagaimana cara memulai bisnis kecil?",
  },
  {
    id: 39,
    question: "What are the benefits of meditation?",
  },
  {
    id: 40,
    question: "Apa manfaat meditasi?",
  },
  {
    id: 41,
    question: "How to improve your memory?",
  },
  {
    id: 42,
    question: "Bagaimana cara meningkatkan daya ingat Anda?",
  },
  {
    id: 43,
    question: "What are the effects of climate change?",
  },
  {
    id: 44,
    question: "Apa dampak perubahan iklim?",
  },
  {
    id: 45,
    question: "How to develop good study habits?",
  },
  {
    id: 46,
    question: "Bagaimana cara mengembangkan kebiasaan belajar yang baik?",
  },
  {
    id: 47,
    question: "What are the benefits of traveling?",
  },
  {
    id: 48,
    question: "Apa manfaat dari bepergian?",
  },
  {
    id: 49,
    question: "How to make a budget and stick to it?",
  },
  {
    id: 50,
    question: "Bagaimana cara membuat anggaran dan mematuhinya?",
  },
  {
    id: 51,
    question: "What are the characteristics of effective leadership?",
  },
  {
    id: 52,
    question: "Apa karakteristik kepemimpinan yang efektif?",
  },
  {
    id: 53,
    question: "How to overcome procrastination?",
  },
  {
    id: 54,
    question: "Bagaimana cara mengatasi penundaan?",
  },
  {
    id: 55,
    question: "What are the benefits of a healthy diet?",
  },
  {
    id: 56,
    question: "Apa manfaat dari pola makan sehat?",
  },
  {
    id: 57,
    question: "How to improve communication skills?",
  },
  {
    id: 58,
    question: "Bagaimana cara meningkatkan keterampilan komunikasi?",
  },
  {
    id: 59,
    question: "What are the effects of globalization?",
  },
  {
    id: 60,
    question: "Apa dampak dari globalisasi?",
  },
  {
    id: 61,
    question: "How to maintain work-life balance?",
  },
  {
    id: 62,
    question:
      "Bagaimana cara menjaga keseimbangan antara kehidupan kerja dan kehidupan pribadi?",
  },
  {
    id: 63,
    question: "What are the benefits of volunteering?",
  },
  {
    id: 64,
    question: "Apa manfaat dari menjadi relawan?",
  },
  {
    id: 65,
    question: "How to develop problem-solving skills?",
  },
  {
    id: 66,
    question: "Bagaimana cara mengembangkan kemampuan pemecahan masalah?",
  },
  {
    id: 67,
    question: "What are the causes of climate change?",
  },
  {
    id: 68,
    question: "Apa penyebab perubahan iklim?",
  },
  {
    id: 69,
    question: "How to set and achieve goals effectively?",
  },
  {
    id: 70,
    question: "Bagaimana cara menetapkan dan mencapai tujuan secara efektif?",
  },
  {
    id: 71,
    question: "What are the benefits of learning a musical instrument?",
  },
  {
    id: 72,
    question: "Apa manfaat dari belajar alat musik?",
  },
  {
    id: 73,
    question: "How to start a YouTube channel?",
  },
  {
    id: 74,
    question: "Bagaimana cara memulai channel YouTube?",
  },
  {
    id: 75,
    question: "What are the benefits of regular exercise?",
  },
  {
    id: 76,
    question: "Apa manfaat dari olahraga secara teratur?",
  },
  {
    id: 77,
    question: "How to create a personal development plan?",
  },
  {
    id: 78,
    question: "Bagaimana cara membuat rencana pengembangan pribadi?",
  },
  {
    id: 79,
    question: "What are the effects of social media on mental health?",
  },
  {
    id: 80,
    question: "Apa efek media sosial terhadap kesehatan mental?",
  },
];

export { dataQuestions };
