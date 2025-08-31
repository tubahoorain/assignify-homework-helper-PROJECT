
// Function to calculate and update price
  function updatePrice() {
  const education = document.getElementById('education-level').value;
  const wordCount = document.getElementById('word-count').value;


    // Check if education or word count are still set to default "Select" value
    if (education === 'Select Education Level' || wordCount === 'Select Word Count / Pages') {
      document.querySelector('.price span').textContent = '$0.00';
      return; // Don't calculate price if selection is invalid
    }

    // Price chart based on education level and word count
   const priceChart = {
  'College': {
    '1 Page / 275 Words': 10,
    '2 Pages / 550 Words': 20,
    '3 Pages / 825 Words': 30,
    '4 Pages / 1100 Words': 40
  },
  'Undergraduate': {
    '1 Page / 275 Words': 12,
    '2 Pages / 550 Words': 24,
    '3 Pages / 825 Words': 36,
    '4 Pages / 1100 Words': 48
  },
  'Masters': {
    '1 Page / 275 Words': 15,
    '2 Pages / 550 Words': 30,
    '3 Pages / 825 Words': 45,
    '4 Pages / 1100 Words': 60
  },
  'PhD': {
    '1 Page / 275 Words': 20,
    '2 Pages / 550 Words': 40,
    '3 Pages / 825 Words': 60,
    '4 Pages / 1100 Words': 80
  }
};

    // Get the price based on education level and word count
    const price = priceChart[education] && priceChart[education][wordCount] || 0;

    // Display the calculated price
    document.querySelector('.price span').textContent = `$${price}.00`;
  }

  // Event listener for when user changes any select option
  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', updatePrice);
  });

  // Initialize price on page load
  document.addEventListener('DOMContentLoaded', updatePrice);

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.quote-btn').addEventListener('click', function () {
      const education = document.querySelectorAll('select')[0].value;
      const paperType = document.querySelectorAll('select')[1].value;
      const wordCount = document.querySelectorAll('select')[2].value;
      const deadline = document.querySelectorAll('select')[3].value;

      const price = document.querySelector('.price span').textContent;

      const message = `New Assignment Order:\n📚 Education: ${education}\n📄 Type: ${paperType}\n📑 Pages: ${wordCount}\n⏰ Deadline: ${deadline}\n💲 Price: ${price}`;

      const whatsappNumber = '923002511353';
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  });

  // Toggle the menu visibility when hamburger icon is clicked
document.getElementById("hamburger-icon").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});



