const imageRepository = require("../repositories/imageRepository");
const userRepository = require("../repositories/userRepository");

exports.uploadImage = async (
  usercode,
  url,
  category,
  weight,
  length,
  location
) => {
  await imageRepository.uploadImage(
    usercode,
    url,
    category,
    weight,
    length,
    location
  );

  // 뱃지 알고리즘
  // switch (category) {
  //   case "Black Sea Sprat":
  //     await userRepository.addFishByUsercode(usercode, "blackseasprat");
  //     break;
  //   case "Trout":
  //     await userRepository.addFishByUsercode(usercode, "trout");
  //     break;
  //   case "Striped Red Mullet":
  //     await userRepository.addFishByUsercode(usercode, "stripedredmullet");
  //     break;
  //   case "Shrimp":
  //     await userRepository.addFishByUsercode(usercode, "shrimp");
  //     break;
  //   case "Sea Bass":
  //     await userRepository.addFishByUsercode(usercode, "seabass");
  //     break;
  //   case "Red Sea Bream":
  //     await userRepository.addFishByUsercode(usercode, "redseabream");
  //     break;
  //   case "Red Mullet":
  //     await userRepository.addFishByUsercode(usercode, "redmullet");
  //     break;
  //   case "Horse Mackerel":
  //     await userRepository.addFishByUsercode(usercode, "horsemackerel");
  //     break;
  //   case "Gilt-Head Bream":
  //     await userRepository.addFishByUsercode(usercode, "giltheadbream");
  //     break;
  // }

  return { message: "이미지 등록 완료" };
};

exports.getImagesByCategory = async (usercode, category) => {
  const results = await imageRepository.findImagesByCategory(
    usercode,
    category
  );
  if (results.length === 0) {
    throw new Error("결과값이 없습니다. 도감을 채워주세요.");
  }
  return results;
};
