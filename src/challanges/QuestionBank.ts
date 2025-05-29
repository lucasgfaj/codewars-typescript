//Lucas Fajardo e  Lucas Eduardo Aurelio

export default class QuestionBank {
  private questions: string[];

  constructor(questions: string[]) {
    this.questions = questions;
  }

  newExam(n: number): string[] {
    const questions = this.questions.length;

    if (n === 0) {
      return [];
    }

    if (n > 0) {
      return [...this.questions];
    }

    let abs = Math.abs(n);
    
    if (abs > questions) return [];

    const selected: string[] = [];

    for (let i = 0; i < questions; i++) {
      const index = i * 2;
      if (index >= questions) break;
      selected.push(this.questions[index]);
    }

    return selected;
  }
}
