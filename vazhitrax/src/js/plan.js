// Calculator Logic
const planType = document.querySelectorAll('input[name="plan-type"]');
const driversInput = document.getElementById("drivers");
const staffInput = document.getElementById("staff");
const studentsInput = document.getElementById("students");
const totalCostElement = document.getElementById("total-cost");
const basePriceElement = document.getElementById("base-price");
const planNameElement = document.getElementById("selected-plan-name");
const driverBaseElement = document.getElementById("driver-base");
const staffBaseElement = document.getElementById("staff-base");
const studentBaseElement = document.getElementById("student-base");
const driverBlocksElement = document.getElementById("driver-blocks");
const staffBlocksElement = document.getElementById("staff-blocks");
const studentBlocksElement = document.getElementById("student-blocks");
const driverAddonElement = document.getElementById("driver-addon");
const staffAddonElement = document.getElementById("staff-addon");
const studentAddonElement = document.getElementById("student-addon");

// Base values
const basePrices = {
  normal: 45000,
  pro: 55000,
};

// Base limits
const baseLimits = {
  normal: {
    drivers: 20,
    staff: 30,
    students: 200,
    name: "Normal Plan",
  },
  pro: {
    drivers: 30,
    staff: 50,
    students: 400,
    name: "Pro Plan",
  },
};

function calculateCost() {
  let selectedPlan;
  planType.forEach((plan) => {
    if (plan.checked) {
      selectedPlan = plan.value;
    }
  });

  const basePrice = basePrices[selectedPlan];
  const baseLimit = baseLimits[selectedPlan];

  // Update plan name and base limits display
  planNameElement.textContent = baseLimit.name;
  basePriceElement.textContent = `₹${basePrice.toLocaleString()}`;
  driverBaseElement.textContent = `(Base: ${baseLimit.drivers} included)`;
  staffBaseElement.textContent = `(Base: ${baseLimit.staff} included)`;
  studentBaseElement.textContent = `(Base: ${baseLimit.students} included)`;

  const extraDrivers = Math.max(0, parseInt(driversInput.value) || 0);
  const extraStaff = Math.max(0, parseInt(staffInput.value) || 0);
  const extraStudents = Math.max(0, parseInt(studentsInput.value) || 0);

  // Calculate blocks (5 drivers, 10 staff, 15 students per block)
  const driverBlocks = Math.ceil(extraDrivers / 5);
  const staffBlocks = Math.ceil(extraStaff / 10);
  const studentBlocks = Math.ceil(extraStudents / 15);

  const driverCost = driverBlocks * 500;
  const staffCost = staffBlocks * 500;
  const studentCost = studentBlocks * 500;

  const totalCost = basePrice + driverCost + staffCost + studentCost;

  // Update UI
  totalCostElement.textContent = `₹${totalCost.toLocaleString()}`;

  // Update blocks display
  driverBlocksElement.textContent = `${driverBlocks} blocks`;
  staffBlocksElement.textContent = `${staffBlocks} blocks`;
  studentBlocksElement.textContent = `${studentBlocks} blocks`;

  // Update cost breakdown
  driverAddonElement.innerHTML = `<span>Additional Drivers</span> <span class="addon-price">${
    driverCost > 0 ? "+ ₹" + driverCost.toLocaleString() : "Included"
  }</span>`;
  staffAddonElement.innerHTML = `<span>Additional Staff</span> <span class="addon-price">${
    staffCost > 0 ? "+ ₹" + staffCost.toLocaleString() : "Included"
  }</span>`;
  studentAddonElement.innerHTML = `<span>Additional Students</span> <span class="addon-price">${
    studentCost > 0 ? "+ ₹" + studentCost.toLocaleString() : "Included"
  }</span>`;
}

// Add event listeners
planType.forEach((plan) => {
  plan.addEventListener("change", calculateCost);
});

driversInput.addEventListener("input", calculateCost);
staffInput.addEventListener("input", calculateCost);
studentsInput.addEventListener("input", calculateCost);

// Initial calculation
calculateCost();
