const Society = require("../../models/society");
const Student = require("../../models/student");

exports.fetchSocieties = async () => {
  // await Society.create([
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "E-Cell Society",
  //     description:
  //       "E-Cell is an amazing society. entreprenour cell is a gateway for new talent.",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "14/6/2022",
  //         time: "11 AM",
  //         createBy: "Subham Kumar Burnwal",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "In this program fresher are invited to attend this session.",
  //         createBy: "Sudip Ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Robotics Society",
  //     description: "rorbotics society is an amazing society",
  //     members: [],
  //     events: [
  //       {
  //         title: "orientation program",
  //         description: "this is for fresher students",
  //         registered_members: [],
  //         date: "10/6/2022",
  //         time: "10 AM",
  //         createBy: "Puranjoy Patra",
  //       },
  //     ],
  //     notice: [
  //       {
  //         title: "an orientation program will be organized",
  //         description:
  //           "in this program fresher are invited to attend this session.",
  //         createBy: "sudip ruidas",
  //       },
  //     ],
  //   },
  // ]);
  const societies = await Society.find();
  return { societies };
};

exports.getRegisteredSocieties = async ({ societies_id }) => {
  const registered_societies = await Society.find({ _id: societies_id });
  return { registered_societies };
};

exports.saveSelectedSocieties = async ({ userId, selected_societies }) => {
  const student = await Student.findById({ _id: userId });

  if (!student) {
    return {
      error: "No student found",
      status: 404,
    };
  }

  const societies = [];

  for (let selected_society of selected_societies) {
    societies.push(await Society.findById({ _id: selected_society }));
  }

  for (let sct of societies) {
    let members = [...sct.members];
    members.push(userId);
    await Society.updateOne(
      { _id: sct._id },
      {
        $set: {
          members,
        },
      }
    );
  }

  await student.updateOne({
    registered_societies: selected_societies,
  });

  return {
    message: "Updated Society and student",
  };
};

exports.updateRegisteredSociety = async ({
  student_id,
  societyId,
  followUnfollowRequest,
}) => {
  const student = await Student.findById({ _id: student_id });
  const society = await Society.findById({ _id: societyId });

  if (!student || !society) {
    return {
      message: "No student/society found",
      status: 404,
    };
  }

  let registeredSocieties = student.registered_societies;
  let registeredSocietiesIndex;
  let member_index;

  if (followUnfollowRequest === "Unfollow") {
    registeredSocietiesIndex = registeredSocieties.findIndex(
      (item) => item === societyId
    );
    registeredSocieties.splice(registeredSocietiesIndex, 1);
    await student.updateOne({
      registered_societies: registeredSocieties,
    });
    member_index = society.members.findIndex((item) => item === student_id);
    society.members.splice(member_index, 1);
    await society.updateOne({
      members: society.members,
    });
  } else if (followUnfollowRequest === "Follow") {
    registeredSocieties.push(societyId);
    await student.updateOne({
      registered_societies: registeredSocieties,
    });
    society.members = [...society.members];
    society.members.push(student_id);
    await society.updateOne({
      members: society.members,
    });
  }

  return {
    message: "Updated",
  };
};

exports.getSocietyDetails = async ({ society_id }) => {
  const society = await Society.find({
    _id: society_id,
  });

  if (!society) {
    return {
      message: "No society found",
      status: 404,
    };
  }
  const members_id = [...society[0].members];

  const members = [];

  for (let member_id of members_id) {
    members.push(await Student.findById({ _id: member_id }));
  }

  return {
    society_id,
    society: society[0],
    members,
  };
};
