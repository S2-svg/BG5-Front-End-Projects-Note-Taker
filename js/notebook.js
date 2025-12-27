// Enhanced notes data with academic subjects
let notes = [
  {
    id: 1,
    title: "Web Design Principles",
    date: "Today",
    content:
      "Key principles of web design: usability, accessibility, responsiveness, and visual hierarchy. Remember to consider user experience (UX) and user interface (UI) design patterns.",
    tags: ["web-design", "design-principles", "important"],
    folder: "web-design",
    pinned: true,
    archived: false,
    important: true,
    color: "#e8eaf6",
    priority: "high",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Database Normalization",
    date: "Yesterday",
    content:
      "Normal forms: 1NF, 2NF, 3NF, BCNF. Each normal form addresses specific types of data redundancy and dependency issues. Remember to avoid update anomalies.",
    tags: ["database", "normalization", "sql"],
    folder: "database",
    pinned: false,
    archived: false,
    important: true,
    color: "#e1f5fe",
    priority: "medium",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 3,
    title: "Meeting Notes - Project Planning",
    date: "12/12/2024",
    content:
      "Discussed project timeline and deliverables. Need to assign tasks to team members and set up weekly check-in meetings. Review design mockups by Friday.",
    tags: ["student-meeting", "project", "planning"],
    folder: "student-meeting",
    pinned: false,
    archived: false,
    important: true,
    color: "#fff3cd",
    priority: "high",
    createdAt: "2024-12-12T00:00:00.000Z",
    updatedAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: 4,
    title: "English Grammar Review",
    date: "1/12/2024",
    content:
      "Verb tenses: present simple, present continuous, past simple, future simple. Common mistakes: subject-verb agreement, article usage (a/an/the).",
    tags: ["general-english", "grammar", "review"],
    folder: "general-english",
    pinned: true,
    archived: false,
    important: false,
    color: "#f3e5f5",
    priority: "medium",
    createdAt: "2024-12-01T00:00:00.000Z",
    updatedAt: "2024-12-01T00:00:00.000Z",
  },
  {
    id: 5,
    title: "Algorithm Complexity",
    date: "12/12/2024",
    content:
      "Big O notation: O(1), O(log n), O(n), O(n log n), O(n²). Time vs space complexity analysis for common sorting algorithms: quicksort, mergesort, bubblesort.",
    tags: ["algorithm", "complexity", "big-o"],
    folder: "algorithm",
    pinned: false,
    archived: false,
    important: true,
    color: "#ffebee",
    priority: "high",
    createdAt: "2024-12-12T00:00:00.000Z",
    updatedAt: "2024-12-12T00:00:00.000Z",
  },
  {
    id: 6,
    title: "Frontend Frameworks Comparison",
    date: "1/11/2024",
    content:
      "React vs Vue vs Angular: comparison of component structure, state management, learning curve, and community support. Consider project requirements before choosing.",
    tags: ["frontend", "frameworks", "comparison"],
    folder: "frontend",
    pinned: false,
    archived: false,
    important: false,
    color: "#e8f5e8",
    priority: "medium",
    createdAt: "2024-11-01T00:00:00.000Z",
    updatedAt: "2024-11-01T00:00:00.000Z",
  },
  {
    id: 7,
    title: "Professional Development Goals",
    date: "15/11/2024",
    content:
      "1. Complete certification course\n2. Attend networking events\n3. Improve presentation skills\n4. Learn new programming language\n5. Contribute to open source",
    tags: ["professional-life", "goals", "career"],
    folder: "professional-life",
    pinned: true,
    archived: false,
    important: true,
    color: "#fff3cd",
    priority: "high",
    createdAt: "2024-11-15T00:00:00.000Z",
    updatedAt: "2024-11-15T00:00:00.000Z",
  },
  {
    id: 8,
    title: "Backend Architecture Patterns",
    date: "20/11/2024",
    content:
      "Microservices vs Monolithic architecture. RESTful API design principles. Database connection pooling and caching strategies for performance optimization.",
    tags: ["backend", "architecture", "patterns"],
    folder: "backend",
    pinned: false,
    archived: false,
    important: true,
    color: "#f3e5f5",
    priority: "high",
    createdAt: "2024-11-20T00:00:00.000Z",
    updatedAt: "2024-11-20T00:00:00.000Z",
  },
  {
    id: 9,
    title: "Software Deployment Strategies",
    date: "5/12/2024",
    content:
      "Blue-green deployment, canary releases, rolling updates. CI/CD pipeline setup using Jenkins/GitHub Actions. Monitoring and rollback procedures.",
    tags: ["software-deployment", "devops", "ci-cd"],
    folder: "software-deployment",
    pinned: false,
    archived: false,
    important: true,
    color: "#e1f5fe",
    priority: "medium",
    createdAt: "2024-12-05T00:00:00.000Z",
    updatedAt: "2024-12-05T00:00:00.000Z",
  },
  {
    id: 10,
    title: "English for IT Vocabulary",
    date: "10/12/2024",
    content:
      "Technical terms: algorithm, database, framework, interface, protocol, query, repository, server, syntax, variable. Practice using in context during presentations.",
    tags: ["english-for-it", "vocabulary", "technical"],
    folder: "english-for-it",
    pinned: false,
    archived: false,
    important: false,
    color: "#e8f5e8",
    priority: "low",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
  },
  {
    id: 11,
    title: "Design Thinking Process",
    date: "8/12/2024",
    content:
      "Empathize, Define, Ideate, Prototype, Test. User research methods: interviews, surveys, observation. Creating user personas and journey maps.",
    tags: ["design", "process", "ux"],
    folder: "design",
    pinned: false,
    archived: true,
    important: true,
    color: "#ffebee",
    priority: "medium",
    createdAt: "2024-12-08T00:00:00.000Z",
    updatedAt: "2024-12-08T00:00:00.000Z",
  },
];

// App settings
let settings = {
  defaultColor: "white",
  defaultPriority: "high",
  autoSaveInterval: 10,
  notesPerPage: 20,
  richTextEditor: false,
  spellCheck: true,
  showCharCount: true,
  theme: "light",
  sortBy: "newest",
};

// DOM elements
const notesGrid = document.getElementById("notesGrid");
const newNoteBtn = document.getElementById("newNoteBtn");
const noteModal = document.getElementById("noteModal");
const deleteModal = document.getElementById("deleteModal");
const settingsModal = document.getElementById("settingsModal");
const closeModal = document.getElementById("closeModal");
const closeSettings = document.getElementById("closeSettings");
const cancelBtn = document.getElementById("cancelBtn");
const noteForm = document.getElementById("noteForm");
const modalTitle = document.getElementById("modalTitle");
const noteTitle = document.getElementById("noteTitle");
const noteDate = document.getElementById("noteDate");
const noteContent = document.getElementById("noteContent");
const noteTags = document.getElementById("noteTags");
const noteFolder = document.getElementById("noteFolder");
const searchInput = document.getElementById("searchInput");
const deleteBtn = document.getElementById("deleteBtn");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");
const themeToggle = document.getElementById("themeToggle");
const nightModeToggle = document.getElementById("nightModeToggle");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const toastIcon = document.getElementById("toastIcon");
const charCounter = document.getElementById("charCounter");
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const exportBtn = document.getElementById("exportNotes");
const importBtn = document.getElementById("importNotes");
const settingsBtn = document.getElementById("settingsBtn");
const saveSettingsBtn = document.getElementById("saveSettings");
const resetSettingsBtn = document.getElementById("resetSettings");

// Quick action buttons
const sortNewestBtn = document.getElementById("sortNewest");
const sortOldestBtn = document.getElementById("sortOldest");
const sortAlphabeticalBtn = document.getElementById("sortAlphabetical");
const filterImportantBtn = document.getElementById("filterImportant");

// Stats elements
const totalNotesEl = document.getElementById("totalNotes");
const pinnedNotesCountEl = document.getElementById("pinnedNotesCount");
const archivedNotesCountEl = document.getElementById("archivedNotesCount");
const todayNotesCountEl = document.getElementById("todayNotesCount");
const importantNotesCountEl = document.getElementById("importantNotesCount");
const totalNotesStatEl = document.getElementById("totalNotesStat");
const charCountEl = document.getElementById("charCount");
const productivityFill = document.getElementById("productivityFill");
const productivityText = document.getElementById("productivityText");

// Folder count elements
const allCountEl = document.getElementById("allCount");
const generalEnglishCountEl = document.getElementById("generalEnglishCount");
const webDesignCountEl = document.getElementById("webDesignCount");
const algorithmCountEl = document.getElementById("algorithmCount");
const studentMeetingCountEl = document.getElementById("studentMeetingCount");
const databaseCountEl = document.getElementById("databaseCount");
const softwareDeploymentCountEl = document.getElementById(
  "softwareDeploymentCount"
);
const frontendCountEl = document.getElementById("frontendCount");
const professionalLifeCountEl = document.getElementById(
  "professionalLifeCount"
);
const backendCountEl = document.getElementById("backendCount");
const englishForItCountEl = document.getElementById("englishForItCount");
const designCountEl = document.getElementById("designCount");

let currentNoteId = null;
let isEditing = false;
let currentView = "all";
let selectedColor = "white";
let selectedPriority = "high";
let noteToDelete = null;
let sortOrder = "newest";
let showImportantOnly = false;
let autoSaveTimer;
let draggedNote = null;

// Initialize the app
function initApp() {
  loadSettings();
  loadNotesFromStorage();
  displayNotes(getFilteredNotes());
  updateStats();
  updateFolderCounts();
  setupEventListeners();
  setCurrentDate();
  updateProductivity();
  startAutoSave();
  initLucideIcons();
  showToast("Welcome to Academic Notes App!", "info");
}

// Initialize Lucide icons
function initLucideIcons() {
  if (window.lucide) {
    lucide.createIcons();
    // Refresh icons periodically since they might be added dynamically
    setInterval(() => {
      if (window.lucide) {
        lucide.createIcons();
      }
    }, 1000);
  }
}

// Load notes from localStorage
function loadNotesFromStorage() {
  const savedNotes = localStorage.getItem("digitalNotes");
  if (savedNotes) {
    try {
      const parsedNotes = JSON.parse(savedNotes);
      if (Array.isArray(parsedNotes) && parsedNotes.length > 0) {
        notes = parsedNotes;
      }
    } catch (e) {
      console.error("Error loading notes from storage:", e);
      showToast("Error loading saved notes", "error");
    }
  }
}

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem("digitalNotesSettings");
  if (savedSettings) {
    try {
      const parsedSettings = JSON.parse(savedSettings);
      settings = { ...settings, ...parsedSettings };
      applySettings();
    } catch (e) {
      console.error("Error loading settings:", e);
    }
  }
}

// Apply settings to UI
function applySettings() {
  // Apply theme
  if (settings.theme === "dark") {
    enableDarkTheme();
  } else if (settings.theme === "night") {
    enableNightMode();
  }

  // Apply sort order
  sortOrder = settings.sortBy;
  updateSortButtons();

  // Update settings form
  document.getElementById("defaultColor").value = settings.defaultColor;
  document.getElementById("defaultPriority").value = settings.defaultPriority;
  document.getElementById("autoSaveInterval").value = settings.autoSaveInterval;
  document.getElementById("notesPerPage").value = settings.notesPerPage;
  document.getElementById("richTextEditor").checked = settings.richTextEditor;
  document.getElementById("spellCheck").checked = settings.spellCheck;
  document.getElementById("showCharCount").checked = settings.showCharCount;

  // Apply spell check
  noteContent.spellcheck = settings.spellCheck;

  // Apply rich text editor if enabled
  if (settings.richTextEditor) {
    noteContent.classList.add("rich-text");
  }
}

// Save notes to localStorage
function saveNotesToStorage() {
  try {
    localStorage.setItem("digitalNotes", JSON.stringify(notes));
  } catch (e) {
    console.error("Error saving notes:", e);
    showToast("Error saving notes to storage", "error");
  }
}

// Save settings to localStorage
function saveSettingsToStorage() {
  try {
    localStorage.setItem("digitalNotesSettings", JSON.stringify(settings));
  } catch (e) {
    console.error("Error saving settings:", e);
    showToast("Error saving settings", "error");
  }
}

// Start auto-save timer
function startAutoSave() {
  if (autoSaveTimer) clearInterval(autoSaveTimer);
  autoSaveTimer = setInterval(() => {
    saveNotesToStorage();
    console.log("Auto-saved notes");
  }, settings.autoSaveInterval * 1000);
}

// Display notes in the grid
function displayNotes(notesArray) {
  notesGrid.innerHTML = "";

  if (notesArray.length === 0) {
    notesGrid.innerHTML =
      '<div style="grid-column: 1 / -1; text-align: center; color: var(--gray-color); font-size: 18px; padding: 40px; background: white; border-radius: var(--border-radius);"><i class="fas fa-sticky-note" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i><p>No notes found. Create your first note!</p></div>';
    return;
  }

  // Sort notes based on current sort order
  const sortedNotes = sortNotes([...notesArray]);

  sortedNotes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";
    noteCard.dataset.id = note.id;
    noteCard.draggable = true;
    noteCard.setAttribute("role", "button");
    noteCard.setAttribute("tabindex", "0");
    noteCard.setAttribute(
      "aria-label",
      `Note: ${note.title}. ${note.content.substring(0, 50)}...`
    );

    if (note.pinned) {
      noteCard.classList.add("pinned");
    }

    if (note.archived) {
      noteCard.classList.add("archived");
    }

    if (note.important) {
      noteCard.classList.add("important");
    }

    // Set background color
    noteCard.style.backgroundColor = note.color;

    const tagsHtml = note.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    // Priority badge
    const priorityBadge =
      note.priority === "high"
        ? '<span style="color: #dc3545; font-size: 12px;"><i class="fas fa-exclamation-circle"></i> High</span>'
        : note.priority === "medium"
        ? '<span style="color: #ffc107; font-size: 12px;"><i class="fas fa-exclamation"></i> Medium</span>'
        : '<span style="color: #28a745; font-size: 12px;"><i class="fas fa-check-circle"></i> Low</span>';

    noteCard.innerHTML = `
                <div class="note-header">
                    <div>
                        <div class="note-title">${escapeHtml(note.title)}</div>
                        <div class="note-date">${escapeHtml(
                          note.date
                        )} ${priorityBadge}</div>
                    </div>
                    <div class="note-actions">
                        <button class="action-btn pin-btn" title="${
                          note.pinned ? "Unpin" : "Pin"
                        }" aria-label="${
      note.pinned ? "Unpin note" : "Pin note"
    }">
                            <i class="fas ${
                              note.pinned ? "fa-thumbtack" : "fa-thumbtack"
                            }"></i>
                        </button>
                        <button class="action-btn important-btn" title="${
                          note.important
                            ? "Mark as normal"
                            : "Mark as important"
                        }" aria-label="${
      note.important ? "Mark as normal" : "Mark as important"
    }">
                            <i class="fas ${
                              note.important ? "fa-star" : "fa-star"
                            }"></i>
                        </button>
                        <button class="action-btn archive-btn" title="${
                          note.archived ? "Unarchive" : "Archive"
                        }" aria-label="${
      note.archived ? "Unarchive note" : "Archive note"
    }">
                            <i class="fas ${
                              note.archived ? "fa-archive" : "fa-archive"
                            }"></i>
                        </button>
                        <button class="action-btn delete-btn" title="Delete" aria-label="Delete note">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="note-content">
                    ${escapeHtml(note.content).replace(/\n/g, "<br>")}
                </div>
                <div class="note-tags">
                    ${tagsHtml}
                </div>
            `;

    // Add keyboard support for note card
    noteCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEditNote(note.id);
      }
    });

    // Add click event to edit note
    noteCard.addEventListener("click", (e) => {
      if (!e.target.closest(".note-actions")) {
        openEditNote(note.id);
      }
    });

    // Add drag and drop events
    noteCard.addEventListener("dragstart", handleDragStart);
    noteCard.addEventListener("dragover", handleDragOver);
    noteCard.addEventListener("drop", handleDrop);
    noteCard.addEventListener("dragend", handleDragEnd);

    // Add event listeners to action buttons
    const pinBtn = noteCard.querySelector(".pin-btn");
    const importantBtn = noteCard.querySelector(".important-btn");
    const archiveBtn = noteCard.querySelector(".archive-btn");
    const deleteBtn = noteCard.querySelector(".delete-btn");

    pinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePin(note.id);
    });

    importantBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleImportant(note.id);
    });

    archiveBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleArchive(note.id);
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      confirmDeleteNote(note.id);
    });

    notesGrid.appendChild(noteCard);
  });

  // Reinitialize Lucide icons after adding notes
  if (window.lucide) {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

// Sort notes based on current sort order
function sortNotes(notesArray) {
  switch (sortOrder) {
    case "newest":
      return notesArray.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    case "oldest":
      return notesArray.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    case "alphabetical":
      return notesArray.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return a.title.localeCompare(b.title);
      });
    case "priority":
      return notesArray.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return (
          (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0)
        );
      });
    default:
      return notesArray;
  }
}

// Update sort buttons state
function updateSortButtons() {
  sortNewestBtn.classList.toggle("active", sortOrder === "newest");
  sortOldestBtn.classList.toggle("active", sortOrder === "oldest");
  sortAlphabeticalBtn.classList.toggle("active", sortOrder === "alphabetical");
  filterImportantBtn.classList.toggle("active", showImportantOnly);
}

// Get filtered notes based on current view
function getFilteredNotes() {
  let filteredNotes = [...notes];

  // Apply view filter
  switch (currentView) {
    case "pinned":
      filteredNotes = filteredNotes.filter(
        (note) => note.pinned && !note.archived
      );
      break;
    case "archived":
      filteredNotes = filteredNotes.filter((note) => note.archived);
      break;
    case "important":
      filteredNotes = filteredNotes.filter(
        (note) => note.important && !note.archived
      );
      break;
    case "today":
      const today = new Date().toDateString();
      filteredNotes = filteredNotes.filter((note) => {
        const noteDate = new Date(note.createdAt).toDateString();
        return noteDate === today && !note.archived;
      });
      break;
    case "general-english":
    case "web-design":
    case "algorithm":
    case "student-meeting":
    case "database":
    case "software-deployment":
    case "frontend":
    case "professional-life":
    case "backend":
    case "english-for-it":
    case "design":
      filteredNotes = filteredNotes.filter(
        (note) => note.folder === currentView && !note.archived
      );
      break;
    // 'all' shows all non-archived notes
    default:
      filteredNotes = filteredNotes.filter((note) => !note.archived);
  }

  // Apply important filter
  if (showImportantOnly) {
    filteredNotes = filteredNotes.filter((note) => note.important);
  }

  return filteredNotes;
}

// Update statistics
function updateStats() {
  const totalNotes = notes.length;
  const pinnedNotes = notes.filter((note) => note.pinned).length;
  const archivedNotes = notes.filter((note) => note.archived).length;
  const importantNotes = notes.filter((note) => note.important).length;
  const today = new Date().toDateString();
  const todayNotes = notes.filter((note) => {
    const noteDate = new Date(note.createdAt).toDateString();
    return noteDate === today;
  }).length;

  // Calculate total characters
  const totalChars = notes.reduce((sum, note) => sum + note.content.length, 0);

  totalNotesEl.textContent = totalNotes;
  pinnedNotesCountEl.textContent = pinnedNotes;
  archivedNotesCountEl.textContent = archivedNotes;
  todayNotesCountEl.textContent = todayNotes;
  importantNotesCountEl.textContent = importantNotes;
  totalNotesStatEl.textContent = totalNotes;
  charCountEl.textContent = (totalChars / 1000).toFixed(1) + "k";
}

// Update folder counts
function updateFolderCounts() {
  const counts = {
    all: notes.filter((note) => !note.archived).length,
    "general-english": notes.filter(
      (note) => note.folder === "general-english" && !note.archived
    ).length,
    "web-design": notes.filter(
      (note) => note.folder === "web-design" && !note.archived
    ).length,
    algorithm: notes.filter(
      (note) => note.folder === "algorithm" && !note.archived
    ).length,
    "student-meeting": notes.filter(
      (note) => note.folder === "student-meeting" && !note.archived
    ).length,
    database: notes.filter(
      (note) => note.folder === "database" && !note.archived
    ).length,
    "software-deployment": notes.filter(
      (note) => note.folder === "software-deployment" && !note.archived
    ).length,
    frontend: notes.filter(
      (note) => note.folder === "frontend" && !note.archived
    ).length,
    "professional-life": notes.filter(
      (note) => note.folder === "professional-life" && !note.archived
    ).length,
    backend: notes.filter((note) => note.folder === "backend" && !note.archived)
      .length,
    "english-for-it": notes.filter(
      (note) => note.folder === "english-for-it" && !note.archived
    ).length,
    design: notes.filter((note) => note.folder === "design" && !note.archived)
      .length,
  };

  allCountEl.textContent = counts.all;
  generalEnglishCountEl.textContent = counts["general-english"];
  webDesignCountEl.textContent = counts["web-design"];
  algorithmCountEl.textContent = counts["algorithm"];
  studentMeetingCountEl.textContent = counts["student-meeting"];
  databaseCountEl.textContent = counts["database"];
  softwareDeploymentCountEl.textContent = counts["software-deployment"];
  frontendCountEl.textContent = counts["frontend"];
  professionalLifeCountEl.textContent = counts["professional-life"];
  backendCountEl.textContent = counts["backend"];
  englishForItCountEl.textContent = counts["english-for-it"];
  designCountEl.textContent = counts["design"];
}

// Update productivity progress
function updateProductivity() {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const weeklyNotes = notes.filter(
    (note) => new Date(note.createdAt) > oneWeekAgo
  ).length;

  // Calculate percentage (max 20 notes per week = 100%)
  const percentage = Math.min((weeklyNotes / 20) * 100, 100);

  productivityFill.style.width = `${percentage}%`;

  if (weeklyNotes === 0) {
    productivityText.textContent = "No notes created this week";
  } else if (weeklyNotes < 5) {
    productivityText.textContent = `${weeklyNotes} notes this week - Keep going!`;
  } else if (weeklyNotes < 10) {
    productivityText.textContent = `${weeklyNotes} notes this week - Good progress!`;
  } else {
    productivityText.textContent = `${weeklyNotes} notes this week - Excellent work!`;
  }
}

// Set up event listeners
function setupEventListeners() {
  // Existing event listeners
  newNoteBtn.addEventListener("click", openNewNote);
  closeModal.addEventListener("click", closeNoteModal);
  closeSettings.addEventListener(
    "click",
    () => (settingsModal.style.display = "none")
  );
  cancelBtn.addEventListener("click", closeNoteModal);
  noteForm.addEventListener("submit", saveNote);
  searchInput.addEventListener("input", searchNotes);
  deleteBtn.addEventListener("click", () => {
    if (currentNoteId) {
      confirmDeleteNote(currentNoteId);
    }
  });

  cancelDelete.addEventListener("click", () => {
    deleteModal.style.display = "none";
    noteToDelete = null;
  });

  confirmDelete.addEventListener("click", deleteNote);

  themeToggle.addEventListener("click", toggleTheme);
  nightModeToggle.addEventListener("click", toggleNightMode);

  // Character counter
  noteContent.addEventListener("input", updateCharCounter);

  // Color selection
  document.querySelectorAll(".color-option").forEach((option) => {
    option.addEventListener("click", function () {
      document
        .querySelectorAll(".color-option")
        .forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      selectedColor = this.dataset.color;
    });
  });

  // Priority selection
  document.querySelectorAll(".priority-option").forEach((option) => {
    option.addEventListener("click", function () {
      document
        .querySelectorAll(".priority-option")
        .forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      selectedPriority = this.dataset.priority;
      this.blur(); // Remove focus after selection
    });
  });

  // Quick actions
  sortNewestBtn.addEventListener("click", () => {
    sortOrder = "newest";
    updateSortButtons();
    displayNotes(getFilteredNotes());
  });

  sortOldestBtn.addEventListener("click", () => {
    sortOrder = "oldest";
    updateSortButtons();
    displayNotes(getFilteredNotes());
  });

  sortAlphabeticalBtn.addEventListener("click", () => {
    sortOrder = "alphabetical";
    updateSortButtons();
    displayNotes(getFilteredNotes());
  });

  filterImportantBtn.addEventListener("click", () => {
    showImportantOnly = !showImportantOnly;
    updateSortButtons();
    displayNotes(getFilteredNotes());
  });

  exportBtn.addEventListener("click", exportNotes);
  importBtn.addEventListener("click", () => {
    dropZone.classList.add("active");
    fileInput.click();
  });

  settingsBtn.addEventListener("click", () => {
    settingsModal.style.display = "flex";
  });

  saveSettingsBtn.addEventListener("click", saveSettings);
  resetSettingsBtn.addEventListener("click", resetSettings);

  // File input change
  fileInput.addEventListener("change", importNotesFromFile);

  // Drag and drop for import
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "var(--accent-color)";
    dropZone.style.backgroundColor = "rgba(255, 126, 95, 0.1)";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "var(--primary-color)";
    dropZone.style.backgroundColor = "rgba(74, 111, 165, 0.05)";
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "var(--primary-color)";
    dropZone.style.backgroundColor = "rgba(74, 111, 165, 0.05)";
    dropZone.classList.remove("active");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      importNotesFromFile({ target: { files } });
    }
  });

  // Click to hide drop zone
  dropZone.addEventListener("click", (e) => {
    if (e.target === dropZone) {
      fileInput.click();
    }
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === noteModal) {
      closeNoteModal();
    }
    if (e.target === deleteModal) {
      deleteModal.style.display = "none";
      noteToDelete = null;
    }
    if (e.target === settingsModal) {
      settingsModal.style.display = "none";
    }
  });

  // Set up folder click events
  document.querySelectorAll(".folder-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".folder-item")
        .forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      const folder = this.dataset.folder;
      currentView = folder;

      // Update page title
      const pageTitle = document.getElementById("currentView");
      const folderName = this.querySelector(".folder-name").textContent;
      pageTitle.textContent = folderName;

      displayNotes(getFilteredNotes());
      showToast(`Showing notes from ${folderName}`, "info");
    });
  });

  // Set up menu click events
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".menu-item")
        .forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      const viewType = this.id;
      currentView = viewType.replace("Notes", "").toLowerCase();

      // Update page title
      const pageTitle = document.getElementById("currentView");
      pageTitle.textContent = this.querySelector("span").textContent + " Notes";

      displayNotes(getFilteredNotes());
      showToast(
        `Showing ${this.querySelector("span").textContent.toLowerCase()} notes`,
        "info"
      );
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + N for new note
    if ((e.ctrlKey || e.metaKey) && e.key === "n") {
      e.preventDefault();
      openNewNote();
    }

    // Esc to close modals
    if (e.key === "Escape") {
      if (noteModal.style.display === "flex") {
        closeNoteModal();
      }
      if (deleteModal.style.display === "flex") {
        deleteModal.style.display = "none";
      }
      if (settingsModal.style.display === "flex") {
        settingsModal.style.display = "none";
      }
      if (dropZone.classList.contains("active")) {
        dropZone.classList.remove("active");
      }
    }

    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

// Enhanced drag and drop handlers
function handleDragStart(e) {
  draggedNote = this;
  e.dataTransfer.setData("text/plain", this.dataset.id);
  e.dataTransfer.effectAllowed = "move";
  this.classList.add("dragging");

  // Add a custom drag image
  setTimeout(() => {
    this.style.opacity = "0.4";
  }, 0);
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";

  // Add visual feedback
  const draggingOver = e.target.closest(".note-card");
  if (draggingOver && draggingOver !== draggedNote) {
    draggingOver.style.border = "2px dashed var(--primary-color)";
  }
}

function handleDrop(e) {
  e.preventDefault();
  const draggedId = e.dataTransfer.getData("text/plain");
  const targetId = this.dataset.id;

  // Remove visual feedback
  document.querySelectorAll(".note-card").forEach((card) => {
    card.style.border = "2px solid transparent";
  });

  // Reorder notes
  const draggedIndex = notes.findIndex((n) => n.id == draggedId);
  const targetIndex = notes.findIndex((n) => n.id == targetId);

  if (draggedIndex > -1 && targetIndex > -1) {
    const [draggedNote] = notes.splice(draggedIndex, 1);
    notes.splice(targetIndex, 0, draggedNote);
    saveNotesToStorage();
    displayNotes(getFilteredNotes());
    showToast("Note reordered successfully!", "success");
  }
}

function handleDragEnd() {
  this.classList.remove("dragging");
  this.style.opacity = "1";

  // Remove visual feedback from all notes
  document.querySelectorAll(".note-card").forEach((card) => {
    card.style.border = "2px solid transparent";
  });

  draggedNote = null;
}

// Open modal for new note
function openNewNote() {
  isEditing = false;
  currentNoteId = null;
  modalTitle.textContent = "New Note";
  noteTitle.value = "";
  noteDate.value = getCurrentDate();
  noteContent.value = "";
  noteTags.value = "";
  noteFolder.value = "general-english";
  deleteBtn.style.display = "none";

  // Reset color selection
  document
    .querySelectorAll(".color-option")
    .forEach((opt) => opt.classList.remove("selected"));
  const defaultColorOption = document.querySelector(
    `.color-option[data-color="${settings.defaultColor}"]`
  );
  if (defaultColorOption) {
    defaultColorOption.classList.add("selected");
    selectedColor = settings.defaultColor;
  } else {
    document
      .querySelector('.color-option[data-color="white"]')
      .classList.add("selected");
    selectedColor = "white";
  }

  // Reset priority selection
  document
    .querySelectorAll(".priority-option")
    .forEach((opt) => opt.classList.remove("selected"));
  const defaultPriorityOption = document.querySelector(
    `.priority-option[data-priority="${settings.defaultPriority}"]`
  );
  if (defaultPriorityOption) {
    defaultPriorityOption.classList.add("selected");
    selectedPriority = settings.defaultPriority;
  } else {
    document
      .querySelector('.priority-option[data-priority="high"]')
      .classList.add("selected");
    selectedPriority = "high";
  }

  updateCharCounter();
  noteModal.style.display = "flex";
  setTimeout(() => noteTitle.focus(), 100);
}

// Open modal for editing note
function openEditNote(id) {
  isEditing = true;
  currentNoteId = id;
  const note = notes.find((n) => n.id === id);

  if (note) {
    modalTitle.textContent = "Edit Note";
    noteTitle.value = note.title;
    noteDate.value = formatDateForInput(note.date);
    noteContent.value = note.content;
    noteTags.value = note.tags.join(", ");
    noteFolder.value = note.folder;
    deleteBtn.style.display = "block";

    // Set color selection
    document
      .querySelectorAll(".color-option")
      .forEach((opt) => opt.classList.remove("selected"));
    const colorOption = document.querySelector(
      `.color-option[data-color="${note.color}"]`
    );
    if (colorOption) {
      colorOption.classList.add("selected");
      selectedColor = note.color;
    } else {
      document
        .querySelector('.color-option[data-color="white"]')
        .classList.add("selected");
      selectedColor = "white";
    }

    // Set priority selection
    document
      .querySelectorAll(".priority-option")
      .forEach((opt) => opt.classList.remove("selected"));
    const priorityOption = document.querySelector(
      `.priority-option[data-priority="${note.priority}"]`
    );
    if (priorityOption) {
      priorityOption.classList.add("selected");
      selectedPriority = note.priority;
    } else {
      document
        .querySelector('.priority-option[data-priority="high"]')
        .classList.add("selected");
      selectedPriority = "high";
    }

    updateCharCounter();
    noteModal.style.display = "flex";
    setTimeout(() => noteTitle.focus(), 100);
  }
}

// Update character counter
function updateCharCounter() {
  const charCount = noteContent.value.length;
  charCounter.textContent = `Characters: ${charCount}`;
  charCounter.style.display = settings.showCharCount ? "block" : "none";
}

// Close note modal
function closeNoteModal() {
  noteModal.style.display = "none";
  noteForm.reset();
}

// Save note (new or edit)
function saveNote(e) {
  e.preventDefault();

  const title = noteTitle.value.trim();
  const date = formatDate(noteDate.value) || getCurrentDate();
  const content = noteContent.value.trim();
  const tags = noteTags.value
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag);
  const folder = noteFolder.value;

  if (!title || !content) {
    showToast("Please fill in both title and content", "error");
    return;
  }

  if (isEditing) {
    // Update existing note
    const noteIndex = notes.findIndex((n) => n.id === currentNoteId);
    if (noteIndex !== -1) {
      notes[noteIndex] = {
        ...notes[noteIndex],
        title,
        date,
        content,
        tags,
        folder,
        color: selectedColor,
        priority: selectedPriority,
        updatedAt: new Date().toISOString(),
      };
      showToast("Note updated successfully!", "success");
    }
  } else {
    // Create new note
    const newNote = {
      id: notes.length > 0 ? Math.max(...notes.map((n) => n.id)) + 1 : 1,
      title,
      date,
      content,
      tags: tags.length > 0 ? tags : ["academic"],
      folder,
      pinned: false,
      archived: false,
      important: false,
      color: selectedColor,
      priority: selectedPriority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    notes.unshift(newNote);
    showToast("Note created successfully!", "success");
  }

  saveNotesToStorage();
  displayNotes(getFilteredNotes());
  updateStats();
  updateFolderCounts();
  updateProductivity();
  closeNoteModal();
}

// Toggle pin status
function togglePin(id) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex].pinned = !notes[noteIndex].pinned;
    notes[noteIndex].updatedAt = new Date().toISOString();
    saveNotesToStorage();
    displayNotes(getFilteredNotes());
    updateStats();
    updateFolderCounts();
    showToast(
      notes[noteIndex].pinned ? "Note pinned!" : "Note unpinned!",
      "info"
    );
  }
}

// Toggle important status
function toggleImportant(id) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex].important = !notes[noteIndex].important;
    notes[noteIndex].updatedAt = new Date().toISOString();
    saveNotesToStorage();
    displayNotes(getFilteredNotes());
    updateStats();
    updateFolderCounts();
    showToast(
      notes[noteIndex].important ? "Marked as important!" : "Marked as normal",
      "info"
    );
  }
}

// Toggle archive status
function toggleArchive(id) {
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex].archived = !notes[noteIndex].archived;
    notes[noteIndex].updatedAt = new Date().toISOString();
    saveNotesToStorage();
    displayNotes(getFilteredNotes());
    updateStats();
    updateFolderCounts();
    showToast(
      notes[noteIndex].archived ? "Note archived!" : "Note unarchived!",
      "info"
    );
  }
}

// Confirm delete note
function confirmDeleteNote(id) {
  noteToDelete = id;
  deleteModal.style.display = "flex";
}

// Delete note
function deleteNote() {
  if (noteToDelete) {
    const noteIndex = notes.findIndex((n) => n.id === noteToDelete);
    if (noteIndex !== -1) {
      const noteTitle = notes[noteIndex].title;
      notes.splice(noteIndex, 1);
      saveNotesToStorage();
      displayNotes(getFilteredNotes());
      updateStats();
      updateFolderCounts();
      updateProductivity();
      showToast(`"${noteTitle}" deleted successfully!`, "success");
    }
    deleteModal.style.display = "none";
    noteToDelete = null;
    closeNoteModal();
  }
}

// Export notes to JSON file
function exportNotes() {
  const dataStr = JSON.stringify(notes, null, 2);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = `academic-notes-${
    new Date().toISOString().split("T")[0]
  }.json`;

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();

  showToast("Notes exported successfully!", "success");
}

// Import notes from file
function importNotesFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const importedNotes = JSON.parse(e.target.result);
      if (Array.isArray(importedNotes)) {
        // Ask for confirmation before importing
        if (
          confirm(
            `Import ${importedNotes.length} notes? This will add them to your existing notes.`
          )
        ) {
          // Add imported notes with new IDs
          let importedCount = 0;
          importedNotes.forEach((note) => {
            note.id =
              notes.length > 0 ? Math.max(...notes.map((n) => n.id)) + 1 : 1;
            note.createdAt = note.createdAt || new Date().toISOString();
            note.updatedAt = new Date().toISOString();
            notes.unshift(note);
            importedCount++;
          });

          saveNotesToStorage();
          displayNotes(getFilteredNotes());
          updateStats();
          updateFolderCounts();
          updateProductivity();
          showToast(`${importedCount} notes imported successfully!`, "success");
        }
      } else {
        showToast(
          "Invalid notes file format. Expected an array of notes.",
          "error"
        );
      }
    } catch (error) {
      showToast("Error importing notes: " + error.message, "error");
    }
  };
  reader.readAsText(file);

  // Reset file input
  event.target.value = "";
  dropZone.classList.remove("active");
}

// Save settings
function saveSettings() {
  settings.defaultColor = document.getElementById("defaultColor").value;
  settings.defaultPriority = document.getElementById("defaultPriority").value;
  settings.autoSaveInterval = parseInt(
    document.getElementById("autoSaveInterval").value
  );
  settings.notesPerPage = parseInt(
    document.getElementById("notesPerPage").value
  );
  settings.richTextEditor = document.getElementById("richTextEditor").checked;
  settings.spellCheck = document.getElementById("spellCheck").checked;
  settings.showCharCount = document.getElementById("showCharCount").checked;

  saveSettingsToStorage();
  applySettings();
  startAutoSave();
  settingsModal.style.display = "none";
  showToast("Settings saved successfully!", "success");
}

// Reset settings to default
function resetSettings() {
  if (confirm("Reset all settings to default values?")) {
    settings = {
      defaultColor: "white",
      defaultPriority: "high",
      autoSaveInterval: 10,
      notesPerPage: 20,
      richTextEditor: false,
      spellCheck: true,
      showCharCount: true,
      theme: "light",
      sortBy: "newest",
    };

    applySettings();
    showToast("Settings reset to default!", "info");
  }
}

// Toggle theme
function toggleTheme() {
  if (settings.theme === "dark") {
    settings.theme = "light";
    disableDarkTheme();
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute("title", "Switch to Dark Theme");
  } else {
    settings.theme = "dark";
    enableDarkTheme();
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    themeToggle.setAttribute("title", "Switch to Light Theme");
  }
  saveSettingsToStorage();
  showToast(`Switched to ${settings.theme} theme`, "info");
}

// Toggle night mode
function toggleNightMode() {
  if (settings.theme === "night") {
    settings.theme = "light";
    disableNightMode();
    nightModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    nightModeToggle.setAttribute("title", "Enable Night Mode");
  } else {
    settings.theme = "night";
    enableNightMode();
    nightModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    nightModeToggle.setAttribute("title", "Disable Night Mode");
  }
  saveSettingsToStorage();
  showToast(
    `Switched to ${settings.theme === "night" ? "night" : "normal"} mode`,
    "info"
  );
}

// Enable dark theme
function enableDarkTheme() {
  document.body.classList.add("dark-theme");
  document.documentElement.style.setProperty("--primary-color", "#6b8cbc");
  document.documentElement.style.setProperty("--light-color", "#2d3748");
  document.documentElement.style.setProperty("--dark-color", "#f8f9fa");
  document.documentElement.style.setProperty("--light-gray", "#4a5568");
  document.documentElement.style.setProperty("--gray-color", "#a0aec0");
}

// Disable dark theme
function disableDarkTheme() {
  document.body.classList.remove("dark-theme");
  document.documentElement.style.setProperty("--primary-color", "#4a6fa5");
  document.documentElement.style.setProperty("--light-color", "#f8f9fa");
  document.documentElement.style.setProperty("--dark-color", "#343a40");
  document.documentElement.style.setProperty("--light-gray", "#e9ecef");
  document.documentElement.style.setProperty("--gray-color", "#6c757d");
}

// Enable night mode
function enableNightMode() {
  document.documentElement.style.setProperty("--primary-color", "#8b9dc3");
  document.documentElement.style.setProperty("--light-color", "#1a202c");
  document.documentElement.style.setProperty("--dark-color", "#e2e8f0");
  document.documentElement.style.setProperty("--light-gray", "#2d3748");
  document.documentElement.style.setProperty("--gray-color", "#a0aec0");
  document.documentElement.style.setProperty("--accent-color", "#ff8a65");
  document.body.style.backgroundColor = "#1a202c";
}

// Disable night mode
function disableNightMode() {
  document.documentElement.style.setProperty("--primary-color", "#4a6fa5");
  document.documentElement.style.setProperty("--light-color", "#f8f9fa");
  document.documentElement.style.setProperty("--dark-color", "#343a40");
  document.documentElement.style.setProperty("--light-gray", "#e9ecef");
  document.documentElement.style.setProperty("--gray-color", "#6c757d");
  document.documentElement.style.setProperty("--accent-color", "#ff7e5f");
  document.body.style.backgroundColor = "#f5f7fb";
}

// Show toast notification
function showToast(message, type = "info") {
  toastMessage.textContent = message;
  toast.className = `toast ${type}`;

  // Set icon based on type
  if (type === "success") {
    toastIcon.className = "fas fa-check-circle";
  } else if (type === "error") {
    toastIcon.className = "fas fa-exclamation-circle";
  } else {
    toastIcon.className = "fas fa-info-circle";
  }

  toast.classList.add("show");

  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Search notes by title, content, or tags
function searchNotes() {
  const searchTerm = searchInput.value.toLowerCase();

  if (!searchTerm) {
    displayNotes(getFilteredNotes());
    return;
  }

  const filteredNotes = getFilteredNotes().filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm) ||
      note.content.toLowerCase().includes(searchTerm) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );

  displayNotes(filteredNotes);

  // Show search results count
  if (searchTerm) {
    const searchInfo = document.createElement("div");
    searchInfo.className = "search-info";
    searchInfo.style.cssText =
      "grid-column: 1 / -1; text-align: center; color: var(--gray-color); margin: 10px 0;";
    searchInfo.innerHTML = `Found ${filteredNotes.length} note${
      filteredNotes.length !== 1 ? "s" : ""
    } for "${searchTerm}"`;

    // Remove existing search info if any
    const existingInfo = document.querySelector(".search-info");
    if (existingInfo) {
      existingInfo.remove();
    }

    notesGrid.insertAdjacentElement("beforebegin", searchInfo);
  } else {
    const existingInfo = document.querySelector(".search-info");
    if (existingInfo) {
      existingInfo.remove();
    }
  }
}

// Helper function to get current date in the format from the image
function getCurrentDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
}

// Format date for date input
function formatDateForInput(dateStr) {
  if (!dateStr) return "";

  // Try to parse various date formats
  const parts = dateStr.split("/");
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  return "";
}

// Format date from input to display format
function formatDate(dateStr) {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return dateStr;
}

// Set current date in the new note form
function setCurrentDate() {
  const dateInput = document.getElementById("noteDate");
  if (dateInput) {
    dateInput.value = new Date().toISOString().split("T")[0];
  }
}

// Enhanced footer functions
function setView(view) {
  // Map view names to actual view types
  const viewMap = {
    all: "all",
    team: "student-meeting",
    workspace: "all",
    appearance: "all",
    "edit profile": "all",
    login: "all",
    overview: "all",
    dashboard: "today",
    notebooks: "all",
    starred: "important",
    "team space": "student-meeting",
    archive: "archived",
    trash: "archived",
  };

  const normalizedView = view.toLowerCase();
  if (viewMap[normalizedView]) {
    // Update menu selection
    document.querySelectorAll(".menu-item, .folder-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Update view
    currentView = viewMap[normalizedView];

    // Update page title
    const pageTitle = document.getElementById("currentView");
    pageTitle.textContent =
      view.charAt(0).toUpperCase() + view.slice(1) + " Notes";

    displayNotes(getFilteredNotes());
    showToast(`View changed to ${view}`, "info");
  }
}

function openSettings() {
  settingsModal.style.display = "flex";
  showToast("Settings opened", "info");
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    // Clear sensitive data
    localStorage.removeItem("digitalNotes");
    localStorage.removeItem("digitalNotesSettings");

    // Show logout message
    showToast("Logged out successfully. Page will refresh.", "info");

    // Refresh page after delay
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
}

// Helper function to escape HTML
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);

// Make functions globally available for footer onclick handlers
window.setView = setView;
window.openSettings = openSettings;
window.logout = logout;
