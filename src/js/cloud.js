import constants from './constants';

const GRADES = constants.GRADES;

const getTags = (grade) => {
  let skillsArr = [];

  switch (grade) {
    case `junior`:
      skillsArr = GRADES.JUNIOR;
      break;
    case `middle`:
      skillsArr = GRADES.JUNIOR.concat(GRADES.MIDDLE);
      break;
    case `senior`:
      skillsArr = GRADES.JUNIOR.concat(GRADES.MIDDLE, GRADES.SENIOR);
      break;
  }

  return skillsArr;
};

const getCloud = (grade = `junior`) => {
  const cloudWrapper = document.querySelector(`.skills-cloud`);
  const arr = getTags(grade);
  let cloud = [];

  arr.forEach((element, index) => {
    cloud.push(`
      <span class="skills-cloud__tag tag-${index + 1}--${grade} skills-cloud__tag--${grade}-${element.size}">${element.tag}</span>
    `);
  });

  cloudWrapper.innerHTML = cloud.join(``);
};

export default getCloud;
