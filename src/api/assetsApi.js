export const fetchAssets = async (query = "", status = "") => {
  // --- LARGE REALISTIC MOCK DATA (25 items) ---
  const mockData = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      model: "Dell Latitude 5500",
      serialNumber: "DL-5500-001",
      status: "Available",
    },
    {
      id: 2,
      name: "Mouse",
      category: "Electronics",
      model: "Logitech G102",
      serialNumber: "LG-102-002",
      status: "Assigned",
    },
    {
      id: 3,
      name: "Keyboard",
      category: "Electronics",
      model: "Logitech K120",
      serialNumber: "LK-120-003",
      status: "Available",
    },
    {
      id: 4,
      name: "Monitor",
      category: "Electronics",
      model: "Samsung 24-inch",
      serialNumber: "SM-24-004",
      status: "Maintenance",
    },
    {
      id: 5,
      name: "Desk",
      category: "Furniture",
      model: "UrbanWood Classic",
      serialNumber: "DW-100-005",
      status: "Assigned",
    },
    {
      id: 6,
      name: "Chair",
      category: "Furniture",
      model: "ErgoPro Mesh",
      serialNumber: "CH-ERG-006",
      status: "Available",
    },
    {
      id: 7,
      name: "Headset",
      category: "Electronics",
      model: "Jabra Evolve 65",
      serialNumber: "JB-65-007",
      status: "Available",
    },
    {
      id: 8,
      name: "Laptop",
      category: "Electronics",
      model: "HP ProBook 450",
      serialNumber: "HP-450-008",
      status: "Assigned",
    },
    {
      id: 9,
      name: "Projector",
      category: "Electronics",
      model: "BenQ DLP",
      serialNumber: "BQ-DLP-009",
      status: "Maintenance",
    },
    {
      id: 10,
      name: "Router",
      category: "Networking",
      model: "Cisco RV340",
      serialNumber: "CS-340-010",
      status: "Available",
    },
    {
      id: 11,
      name: "Printer",
      category: "Electronics",
      model: "Canon L2900",
      serialNumber: "CN-2900-011",
      status: "Assigned",
    },
    {
      id: 12,
      name: "Tablet",
      category: "Electronics",
      model: "iPad 9th Gen",
      serialNumber: "IP-9G-012",
      status: "Available",
    },
    {
      id: 13,
      name: "Server",
      category: "Computing",
      model: "Dell PowerEdge R740",
      serialNumber: "DE-R740-013",
      status: "Maintenance",
    },
    {
      id: 14,
      name: "Switch",
      category: "Networking",
      model: "Cisco SG350",
      serialNumber: "CS-350-014",
      status: "Available",
    },
    {
      id: 15,
      name: "Cabinet",
      category: "Furniture",
      model: "Godrej Steel",
      serialNumber: "GD-CB-015",
      status: "Assigned",
    },
    {
      id: 16,
      name: "Webcam",
      category: "Electronics",
      model: "Logitech C270",
      serialNumber: "LG-270-016",
      status: "Available",
    },
    {
      id: 17,
      name: "Laptop",
      category: "Electronics",
      model: "Lenovo ThinkPad E14",
      serialNumber: "LN-E14-017",
      status: "Available",
    },
    {
      id: 18,
      name: "Docking Station",
      category: "Electronics",
      model: "Dell WD19",
      serialNumber: "DW-19-018",
      status: "Assigned",
    },
    {
      id: 19,
      name: "Scanner",
      category: "Electronics",
      model: "Fujitsu ScanSnap",
      serialNumber: "FJ-SS-019",
      status: "Maintenance",
    },
    {
      id: 20,
      name: "Smartphone",
      category: "Electronics",
      model: "Samsung A52",
      serialNumber: "SM-A52-020",
      status: "Available",
    },
    {
      id: 21,
      name: "MacBook",
      category: "Electronics",
      model: "MacBook Air M1",
      serialNumber: "MB-M1-021",
      status: "Assigned",
    },
    {
      id: 22,
      name: "UPS",
      category: "Electronics",
      model: "Microtek 1100VA",
      serialNumber: "MT-1100-022",
      status: "Available",
    },
    {
      id: 23,
      name: "CCTV Camera",
      category: "Security",
      model: "HikVision Dome",
      serialNumber: "HK-DM-023",
      status: "Available",
    },
    {
      id: 24,
      name: "Conference Speaker",
      category: "Electronics",
      model: "Jabra Speak 510",
      serialNumber: "JB-510-024",
      status: "Assigned",
    },
    {
      id: 25,
      name: "Air Purifier",
      category: "Electronics",
      model: "Dyson Pure Cool",
      serialNumber: "DY-PC-025",
      status: "Maintenance",
    },
  ];

  // simulate backend delay
  await new Promise((res) => setTimeout(res, 300));

  let filtered = mockData;

  // search
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.serialNumber.toLowerCase().includes(q)
    );
  }

  // filter by status
  if (status) {
    filtered = filtered.filter((item) => item.status === status);
  }

  return filtered;
};
