let user = {
    id: 6, name: "Hossein", lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 12,
    scores: { english: 10, math: 19.5, physics: 14 },
  };

  //question1
    function newScore(lesson, score) {
    user.scores[lesson] = score;
    return user
  }
  
  console.log(newScore("literature",20))
  
  //question2
    function newRole(role) {
    user.age < 18 ? user.status = "very young" : user.roles.push(role);
    return user
  }
  
  console.log(newRole("Teacher"));
  
  
  //question3
  const userArrayDataType = Object.entries(user)
  userArrayDataType.push(["fatherName","ali"])
  console.log(userArrayDataType);
  const convertArrToObject = Object.fromEntries(userArrayDataType)
  console.log(convertArrToObject)