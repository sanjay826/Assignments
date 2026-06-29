let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

let updatedMarks: number[] = [];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  updatedMarks[i] = marks[i];
  updatedMarks[i] = updatedMarks[i]+10;

  total += updatedMarks[i];
}

let average = total / updatedMarks.length;

console.log("Updated Marks:");
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

console.log(`Average Student Marks: ${average}`);
