const drawWinner = () => {
  let tickets = [
    521, 731, 914, 603, 458, 830, 269, 563, 387, 496, 230, 174, 724, 859, 328,
    495, 607, 218, 567, 603, 912, 295, 451, 872, 180, 781, 134, 708, 839, 295,
    473, 259, 684, 839, 614, 802, 934, 357, 746, 193, 804, 302, 453, 218, 564,
    273, 518, 602, 832, 795, 150, 682, 716, 904, 651, 397, 601, 509, 781, 381,
    964, 229, 579, 782, 591, 478, 370, 604, 511, 142, 928, 715, 369, 295, 893,
    753, 670, 302, 478, 514, 913, 251, 647, 927, 510, 264, 761, 374, 103, 836,
    129, 785, 540, 311, 798, 413, 831, 905, 164, 688,
  ];

  let totalTickets = tickets.length;

  let draw = Math.floor(Math.random() * totalTickets);
  let winner = tickets[draw];
  console.log(winner);
  document.getElementById("result").innerHTML = winner;
  document.getElementById("modalWinner").innerHTML = winner;
  document.getElementById("result").style.color = "#ff0000";
  console.log("Function called");
};
