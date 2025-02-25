class TodoItem {
    constructor(title) {
      if (!title.trim()) throw new Error("Нотатка не може бути порожньою");
      this.title = title;
      this.completed = false;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  
    edit(newTitle) {
      if (!newTitle.trim()) throw new Error("Нотатка не може бути порожньою");
      this.title = newTitle;
      this.updatedAt = new Date();
    }
  
    toggleComplete() {
      this.completed = !this.completed;
      this.updatedAt = new Date();
    }
  
    getInfo() {
      return {
        title: this.title,
        completed: this.completed,
        createdAt: this.createdAt.toLocaleString(),
        updatedAt: this.updatedAt.toLocaleString(),
      };
    }
  }
  
  class TodoList {
    constructor() {
      this.notes = [];
    }
  
    addNote(title) {
      const note = new TodoItem(title);
      this.notes.push(note);
    }
  
    deleteNote(title) {
      const initialLength = this.notes.length;
      this.notes = this.notes.filter(note => note.title !== title);
      if (initialLength === this.notes.length) {
        throw new Error("Нотатку з такою назвою не знайдено");
      }
    }
  
    editNote(oldTitle, newTitle) {
      const note = this.notes.find(note => note.title === oldTitle);
      if (!note) throw new Error("Нотатку не знайдено");
      note.edit(newTitle);
    }
  
    markComplete(title) {
      const note = this.notes.find(note => note.title === title);
      if (!note) throw new Error("Нотатку не знайдено");
      note.toggleComplete();
    }
  
    getAllNotes() {
      return this.notes.map(note => note.getInfo());
    }
  
    getSummary() {
      const total = this.notes.length;
      const incomplete = this.notes.filter(note => !note.completed).length;
      return { total, incomplete };
    }
  
    searchByTitle(searchTerm) {
      return this.notes
        .filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(note => note.getInfo());
    }
  
    sortByStatus(completedFirst = true) {
      return this.notes
        .slice()
        .sort((a, b) => completedFirst ? b.completed - a.completed : a.completed - b.completed)
        .map(note => note.getInfo());
    }
  
    sortByDate(order = "createdAt") {
      return this.notes
        .slice()
        .sort((a, b) => new Date(a[order]) - new Date(b[order]))
        .map(note => note.getInfo());
    }
  }

  
  
  // Створення списку нотаток
const myTodoList = new TodoList();

// Додавання нотаток
myTodoList.addNote("Купити овочі");
myTodoList.addNote("Відправити посилку");
myTodoList.addNote("Забрати дитину зі школи");

// Редагування нотатки
myTodoList.editNote("Купити овочі", "Купити продукти на тиждень");

// Відмітити нотатку як виконану
myTodoList.markComplete("Забрати дитину зі школи");

// Видалення нотатки
myTodoList.deleteNote("Відправити посилку");

// Отримати всі нотатки
console.log("Всі нотатки:", myTodoList.getAllNotes());

// Пошук за назвою
console.log("Пошук за назвою:", myTodoList.searchByTitle("купити"));

// Сортування за статусом (спочатку виконані)
console.log("Сортування за статусом:", myTodoList.sortByStatus(true));

// Сортування за датою створення
console.log("Сортування за датою створення:", myTodoList.sortByDate("createdAt"));

// Отримати кількість усіх і невиконаних нотаток
console.log("Статистика:", myTodoList.getSummary());