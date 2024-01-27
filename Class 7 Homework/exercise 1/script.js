fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(higherThanThree(response));
    console.log(femalesWith5(response));
    console.log(maleStudentsOver18Inskopje(response));
    console.log(averageGradeFemalesOver24(response));
    console.log(allMalesWithBAndGradeOver2(response));
    console.log(allFemaleBetween20And30Emails(response));
    console.log(fullNamesAbove40(response));
    console.log(studentsUsingGoogleMail(response));
    console.log(femalesLivingInSkopje(response));
  })
  .catch(function (response) {
    console.log("failed request " + response.status);
  });

let higherThanThree = response => {
  const gradeHigherThanThree = response.filter(
    student => student.averageGrade > 3
  );
  return gradeHigherThanThree;
};

let femalesWith5 = response => {
  let femaleStudents = response
    .filter(
      student => student.gender === "Female" && student.averageGrade === 5
    )
    .map(student => student.firstName);

  return femaleStudents;
};

let maleStudentsOver18Inskopje = response => {
  let maleStudents = response
    .filter(
      student =>
        student.gender === "Male" &&
        student.city === "Skopje" &&
        student.age > 18
    )
    .map(student => `${student.firstName} ${student.lastName}`);

  return maleStudents;
};

let averageGradeFemalesOver24 = response => {
  let students = response.filter(
    student => student.gender === "Female" && student.age > 24
  );

  let avgGrade =
    students.reduce((acc, curr) => acc + curr.averageGrade, 0) /
    students.length;
  return Math.round(avgGrade);
};

let allMalesWithBAndGradeOver2 = response => {
  let students = response.filter(
    student =>
      student.gender === "Male" &&
      student.averageGrade > 2 &&
      student.firstName[0] === "B"
  );

  return students;
};

let allFemaleBetween20And30Emails = response => {
  let students = response
    .filter(
      student =>
        student.gender === "Female" && student.age >= 20 && student.age <= 30
    )
    .map(student => student.email)
    .sort((a, b) => a.localeCompare(b));

  return students;
};

let fullNamesAbove40 = response => {
  let students = response
    .filter(student => student.age > 40)
    .sort((a, b) => b.age - a.age)
    .map(student => student.firstName);

  return students;
};

let studentsUsingGoogleMail = response => {
  let students = response.filter(student => student.email.includes("google"));

  return students.length;
};

let femalesLivingInSkopje = response => {
  let students = response.filter(
    student => student.gender === "Female" && student.city === "Skopje"
  );

  let avgAge =
    students.reduce((acc, curr) => acc + curr.age, 0) / students.length;

  return avgAge;
};


