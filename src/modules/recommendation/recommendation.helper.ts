import { IBuilding, BuildingsProvided as buildings } from "../../store/db";

export const getRecommendedBuilding = (interests: string[]) => {

  // TODO: first draft for get recommendation
  const flatList = flatBuildingList(buildings);
  let minRadius = Infinity ;
  let buildingToReturn = -1;
  for (let buildingi = 0; buildingi < flatList.length; buildingi++) {
    let remainingInterestsTofind = interests.filter(val=> !flatList[buildingi].includes(val));
    if (remainingInterestsTofind.length === 0) {
      buildingToReturn = buildingi;
      break;
    };
    for (let radius = 1; radius < flatList.length; radius++) {
      if (buildingi + radius < flatList.length) {
        remainingInterestsTofind = remainingInterestsTofind.filter(val => !flatList[buildingi + radius].includes(val));
      }
      if (buildingi - radius >= 0) {
        remainingInterestsTofind = remainingInterestsTofind.filter(val => !flatList[buildingi - radius].includes(val));
      }
      if (remainingInterestsTofind.length === 0) {
        if (radius < minRadius) {
          minRadius = radius;
          buildingToReturn = buildingi
        };
      };
    }
  }

  return buildingToReturn === -1 ? 'No building found' :Object.keys(Object.values(buildings)[buildingToReturn])[0]
};

const flatBuildingList = (buildingsObject: IBuilding[]) =>{
  const flatList: string[][] = [];
  for (const building of buildingsObject) {
    flatList.push(Object.values(building)[0])
  }
  return flatList;
};


// TODO: Second draft of get recommendation using prefix and suffix method


// let buildings = [['school'], ['gym'], ['gym', 'school'], ['school'], ['school', 'store']]
// const interests = ['store', 'school', 'gym'];

// const findMinRadius = (buildings, interests) => {
//   const prefix = getPrefix(buildings, interests);
//   console.log('--------prefix==', prefix);


//   let suffix = {};

//   let minimumRadius = Infinity;
//   let buildingRequired = -1;

//   for (let i = buildings.length - 1; i >= 0; i--) {
//     const building = buildings[i];
//     for (const interest of building) {
//       suffix[interest] = i;
//     }
//     console.log(building, '------suffix----', suffix)
//     let maxLeftDist = 0;
//     let MaxRightDist = 0;

//     for (const interest of interests) {
//       const leftDistTemp = prefix[interest][i] ? (i - prefix[interest][i]) : Infinity;
//       const rightDistTemp = suffix[interest] ? (suffix[interest] - i) : Infinity;
//       if (leftDistTemp < rightDistTemp) {
//         maxLeftDist = Math.max(leftDistTemp, maxLeftDist);
//       } else {
//         MaxRightDist = Math.max(rightDistTemp, MaxRightDist);
//       }
//     }

//     console.log(maxLeftDist, '-------------', MaxRightDist)
//     if (Math.max(maxLeftDist, MaxRightDist) < minimumRadius) {
//       minimumRadius = Math.max(maxLeftDist, MaxRightDist);
//       buildingRequired = i;
//     }
//   }
//   console.log(buildingRequired);

// }



// function getPrefix(buildings, interests) {
//   let map = {}
//   for (const interst of interests) {
//     if (!map[interst]) map[interst] = [];
//     let position = -Infinity;
//     for (const [index, building] of buildings.entries()) {
//       if (!building.includes(interst)) map[interst].push(position)
//       else {
//         map[interst].push(index);
//         position = index;
//       }
//     }
//   }
//   return map;
// }

// findMinRadius(buildings, interests);