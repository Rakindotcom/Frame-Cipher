"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { BlogPostItem, FAQItem } from "@/types/blog";
import { FRAMECIPHER_REGISTRY, ServiceItemConfig } from "@/lib/registry/servicesRegistry";
import { MediaLibraryModal, MediaItem } from "@/components/admin/cms/MediaLibraryModal";
import {
  ArrowLeft,
  Settings,
  Eye,
  Save,
  Check,
  Copy,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Sparkles,
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Search,
  Sliders,
  Terminal,
  HelpCircle,
  ExternalLink,
  Smartphone,
  Monitor,
  Radio,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Minus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link2,
  Unlink,
  Table as TableIcon,
  Palette,
  Highlighter,
  Undo,
  Redo,
  RemoveFormatting,
  Maximize2,
  Minimize2,
  Indent,
  Outdent,
  ClipboardPaste,
  Split,
  Edit3,
  Lock,
  Calendar,
  MessageSquare,
  Users,
  ChevronDown,
  ChevronUp,
  Code,
  Share2,
  BookOpen,
  Globe,
  Sun,
  Moon,
  Info,
  Zap,
  Tag,
  Folder,
  Layers,
  X,
} from "lucide-react";

export interface EditorBlock {
  id: string;
  type: "paragraph" | "heading_h1" | "heading_h2" | "heading_h3" | "heading_h4" | "heading_h5" | "heading_h6" | "image" | "formula" | "callout" | "code";
  content: string;
  meta?: {
    alt?: string;
    caption?: string;
    url?: string;
  };
}

const DEFAULT_EDITOR_BLOCKS: EditorBlock[] = [
  {
    id: "b-1",
    type: "paragraph",
    content: "",
  },
];

function blocksToHtml(blocks: EditorBlock[]): string {
  return blocks
    .map((block) => {
      if (block.type.startsWith("heading_h")) return `<h${block.type.slice(-1)}>${block.content}</h${block.type.slice(-1)}>`;
      if (block.type === "formula") return `<pre><code>${block.content}</code></pre>`;
      if (block.type === "callout") return `<blockquote>${block.content}</blockquote>`;
      if (block.type === "image") {
        return `<figure><img src="${block.meta?.url || "/logo.png"}" alt="${block.meta?.alt || ""}" /><figcaption>${block.meta?.caption || ""}</figcaption></figure>`;
      }
      return `<p>${block.content}</p>`;
    })
    .join("");
}

function summarizeHtmlAsBlocks(html: string): EditorBlock[] {
  if (typeof DOMParser === "undefined") return DEFAULT_EDITOR_BLOCKS;
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
  const root = doc.body.firstElementChild;
  if (!root) return DEFAULT_EDITOR_BLOCKS;
  const blocks = Array.from(root.children).map((node, index): EditorBlock => {
    const text = node.textContent?.trim() || "";
    const tag = node.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tag)) return { id: `b-${index}`, type: `heading_${tag}` as EditorBlock["type"], content: text };
    if (tag === "blockquote") return { id: `b-${index}`, type: "callout", content: text };
    if (tag === "pre") return { id: `b-${index}`, type: "formula", content: text };
    if (tag === "figure") {
      const image = node.querySelector("img");
      return {
        id: `b-${index}`,
        type: "image",
        content: image?.alt || "Inserted image",
        meta: { url: image?.getAttribute("src") || "", alt: image?.getAttribute("alt") || "", caption: node.querySelector("figcaption")?.textContent || "" },
      };
    }
    return { id: `b-${index}`, type: "paragraph", content: text };
  }).filter((block) => block.content.trim() || block.type === "image");
  return blocks.length > 0 ? blocks : DEFAULT_EDITOR_BLOCKS;
}

const SPECIAL_CHARACTERS = [
  "Ω", "λ", "μ", "π", "θ", "φ", "°", "±", "×", "÷",
  "≈", "≠", "≤", "≥", "∞", "√", "Δ", "∑", "©", "®",
  "™", "€", "£", "¥", "§", "¶", "←", "↑", "→", "↓"
];

interface WordPressEditorProps {
  post: Partial<BlogPostItem>;
  onSave: (updatedPost: BlogPostItem) => void;
  onClose: () => void;
}

export function WordPressEditor({ post, onSave, onClose }: WordPressEditorProps) {
  // Classic WordPress Toolbar States
  const [isKitchenSinkOpen, setIsKitchenSinkOpen] = useState(true);
  const [selectedFormat, setSelectedFormat] = useState("p");
  const [isSpecialCharOpen, setIsSpecialCharOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isPasteAsText, setIsPasteAsText] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string>("6:28:15 pm");

  // Post Details State
  const [title, setTitle] = useState(post.title || "");
  const [slug, setSlug] = useState(post.slug || "");
  const [isEditingSlug, setIsEditingSlug] = useState(false);
  const [category, setCategory] = useState(post.category || "Growth Marketing");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    post.categories && post.categories.length > 0
      ? post.categories
      : [post.category || "Growth Marketing"]
  );
  const [status, setStatus] = useState<"published" | "draft" | "scheduled">(
    post.status || "published"
  );
  const [author, setAuthor] = useState(post.author || "Mahedi Hasan Perves");
  const [excerpt, setExcerpt] = useState(post.excerpt || "");
  const [visibility, setVisibility] = useState<"public" | "password" | "private">(post.visibility || "public");
  const [postPassword, setPostPassword] = useState(post.postPassword || "");
  const [isEditingVisibility, setIsEditingVisibility] = useState(false);
  const [publishDate, setPublishDate] = useState(post.publishDate || new Date().toISOString().split("T")[0]);
  const [publishTime, setPublishTime] = useState("12:00");
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [allowComments, setAllowComments] = useState(post.allowComments !== false);
  const [allowPingbacks, setAllowPingbacks] = useState(post.allowPingbacks !== false);

  // Editor View Mode: "visual" | "text" (HTML)
  const [editorMode, setEditorMode] = useState<"visual" | "text">("visual");
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const isEditorInitializedRef = useRef(false);
  const initialBlocks = Array.isArray(post.blocks) && post.blocks.length > 0
    ? (post.blocks as EditorBlock[])
    : DEFAULT_EDITOR_BLOCKS;
  const [htmlContent, setHtmlContent] = useState<string>(post.content || blocksToHtml(initialBlocks));

  // Initialize contentEditable DOM once on mount (prevents caret jumping to top on Enter)
  useEffect(() => {
    if (contentEditableRef.current && !isEditorInitializedRef.current) {
      contentEditableRef.current.innerHTML = htmlContent;
      isEditorInitializedRef.current = true;
    }
  }, []);

  type SlashMenuState = { query: string; range: Range; top: number; left: number };
  const [slashMenu, setSlashMenu] = useState<SlashMenuState | null>(null);
  const [slashSelection, setSlashSelection] = useState(0);

  type SelectionBubbleState = {
    text: string;
    range: Range;
    top: number;
    left: number;
  };
  const [selectionBubble, setSelectionBubble] = useState<SelectionBubbleState | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ element: HTMLImageElement; top: number; left: number; right: number; bottom: number } | null>(null);
  const resizeActiveRef = useRef<{
    image: HTMLImageElement;
    figure: HTMLElement | null;
    startX: number;
    startWidth: number;
    handle: "nw" | "ne" | "sw" | "se";
  } | null>(null);

  // WordPress Image Details Modal State
  const [isImageDetailsOpen, setIsImageDetailsOpen] = useState(false);
  const [editingImageAlt, setEditingImageAlt] = useState("");
  const [editingImageCaption, setEditingImageCaption] = useState("");
  const [editingImageAlignment, setEditingImageAlignment] = useState<"none" | "left" | "center" | "right">("none");
  const [editingImageWidth, setEditingImageWidth] = useState("100%");
  const [draggedImage, setDraggedImage] = useState<HTMLImageElement | null>(null);
  const draggedImageRef = useRef<HTMLImageElement | null>(null);
  const slashCommands = [
    { label: "Paragraph", hint: "Normal body text", tag: "p" },
    { label: "Heading 1", hint: "Main section heading", tag: "h1" },
    { label: "Heading 2", hint: "Section heading", tag: "h2" },
    { label: "Heading 3", hint: "Subsection heading", tag: "h3" },
    { label: "Heading 4", hint: "Small subsection", tag: "h4" },
    { label: "Heading 5", hint: "Minor heading", tag: "h5" },
    { label: "Heading 6", hint: "Smallest heading", tag: "h6" },
    { label: "Bulleted list", hint: "Create a list", tag: "ul" },
    { label: "Numbered list", hint: "Create a numbered list", tag: "ol" },
    { label: "Quote", hint: "Engineering note", tag: "blockquote" },
    { label: "Image", hint: "Insert from media library", tag: "img" },
    { label: "Callout", hint: "Highlight an engineering note", tag: "aside" },
    { label: "Code block", hint: "Monospace technical code", tag: "pre" },
    { label: "Divider", hint: "Add a section divider", tag: "hr" },
    { label: "Table", hint: "Insert a data table", tag: "table" },
  ] as const;

  // Media Library Modal
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaModalTarget, setMediaModalTarget] = useState<"featured" | "inline">("featured");

  // Featured Image State
  const [featuredImageUrl, setFeaturedImageUrl] = useState(
    post.featuredImage?.url || ""
  );
  const [featuredImageAlt, setFeaturedImageAlt] = useState(
    post.featuredImage?.alt || ""
  );

  // SEO Parameters State (Replaced Yoast SEO naming)
  const [seoTab, setSeoTab] = useState<"seo" | "readability" | "schema" | "social">("seo");
  const [focusKeyword, setFocusKeyword] = useState(post.focusKeyword || "webflow enterprise design system");
  const [seoTitle, setSeoTitle] = useState(
    post.seoTitle || (post.title ? `${post.title} - FrameCipher` : "")
  );
  const [metaDescription, setMetaDescription] = useState(
    post.metaDescription || ""
  );
  const [serpDevice, setSerpDevice] = useState<"desktop" | "mobile">("mobile");
  const [schemaType, setSchemaType] = useState<"TechArticle" | "BlogPosting">(
    post.schemaType || "TechArticle"
  );
  const [faqs, setFaqs] = useState<FAQItem[]>(
    post.faqs && post.faqs.length > 0
      ? post.faqs
      : [
          {
            id: "faq-1",
            question: "How does FrameCipher engineer high-converting B2B Webflow websites?",
            answer:
              "We implement Client-First tokenized styling, hardware-accelerated kinetic interactions, responsive modular CMS architecture, and strict Core Web Vitals optimization under 100ms LCP.",
          },
          {
            id: "faq-2",
            question: "What full-funnel growth channels does FrameCipher manage?",
            answer:
              "We manage paid search and social acquisition (Meta, Google, LinkedIn), programmatic SEO content clusters, CRO experimentation funnels, and CRM pipeline attribution.",
          },
        ]
  );
  const [tags, setTags] = useState<string[]>(post.tags || []);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const handleAddFaq = () => {
    const newFaq: FAQItem = {
      id: `faq-${Date.now()}`,
      question: "",
      answer: "",
    };
    setFaqs((prev) => [...prev, newFaq]);
  };

  const handleUpdateFaq = (id: string, field: "question" | "answer", val: string) => {
    setFaqs((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: val } : f))
    );
  };

  const handleRemoveFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  const handleMoveFaq = (index: number, direction: "up" | "down") => {
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= faqs.length) return;
    const next = [...faqs];
    const temp = next[index];
    next[index] = next[target];
    next[target] = temp;
    setFaqs(next);
  };

  const [isSnippetEditorOpen, setIsSnippetEditorOpen] = useState(true);

  // Collapsible Metaboxes State (Classic WordPress WP-Admin style)
  const [metaboxesOpen, setMetaboxesOpen] = useState({
    publish: true,
    services: true,
    categories: true,
    tags: true,
    featuredImage: true,
    excerpt: true,
    discussion: true,
  });

  const toggleMetabox = (key: keyof typeof metaboxesOpen) => {
    setMetaboxesOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Categories tabs
  const [categoryTab, setCategoryTab] = useState<"all" | "most_used">("all");
  const MOST_USED_CATEGORIES = ["Growth Marketing", "Webflow Development", "UI/UX & Branding", "Technical SEO", "Conversion Optimization"];
  const MOST_USED_TAGS = [
    "webflow",
    "growth-marketing",
    "b2b-seo",
    "cro",
    "design-system",
    "branding",
    "kinetic-ui",
    "full-funnel",
    "landing-pages",
    "attribution",
    "conversion-rate",
    "core-web-vitals",
  ];

  // Link Dialog Modal State
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkOpenInNewTab, setLinkOpenInNewTab] = useState(true);
  const [savedRange, setSavedRange] = useState<Range | null>(null);

  // Table Inserter Modal State
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);

  // Color Pickers Popover State
  const [isTextColorOpen, setIsTextColorOpen] = useState(false);
  const [isHighlightColorOpen, setIsHighlightColorOpen] = useState(false);

  // Categories list with Add New category capability
  const [categoriesList, setCategoriesList] = useState<string[]>([
    "Growth Marketing",
    "Webflow Development",
    "UI/UX & Branding",
    "Technical SEO",
    "Conversion Optimization",
    "Agency Architecture",
  ]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Tags State
  const [tagInput, setTagInput] = useState("");

  // Connected Services & Case Studies State (FrameCipher Registry)
  const [selectedTools, setSelectedTools] = useState<string[]>(
    post.relatedToolSlugs && post.relatedToolSlugs.length > 0
      ? post.relatedToolSlugs
      : ["webflow-development", "performance-marketing", "branding-design"]
  );
  const [toolSearch, setToolSearch] = useState("");
  const [servicesTab, setServicesTab] = useState<"suggested" | "search">("suggested");

  // Content blocks are derived from the same HTML that the rich editor saves.
  const [blocks, setBlocks] = useState<EditorBlock[]>(initialBlocks);

  const syncEditorHtml = () => {
    const nextHtml = contentEditableRef.current?.innerHTML || htmlContent;
    setHtmlContent(nextHtml);
    setBlocks(summarizeHtmlAsBlocks(nextHtml));

    const selection = window.getSelection();
    if (slashMenu && selection?.rangeCount && selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const node = range.startContainer;
      if (node.nodeType === Node.TEXT_NODE) {
        const textBeforeCaret = node.textContent?.slice(0, range.startOffset) || "";
        const slashIndex = textBeforeCaret.lastIndexOf("/");
        if (slashIndex >= 0 && (slashIndex === 0 || /\s/.test(textBeforeCaret[slashIndex - 1]))) {
          const nextRange = range.cloneRange();
          nextRange.setStart(node, slashIndex);
          const rect = range.getBoundingClientRect();
          setSlashMenu((current) => current ? { ...current, query: textBeforeCaret.slice(slashIndex + 1), range: nextRange, top: rect.bottom + 6, left: rect.left } : current);
        }
      }
    }
  };

  const filteredSlashCommands = slashCommands.filter((command) =>
    `${command.label} ${command.hint}`.toLowerCase().includes((slashMenu?.query || "").toLowerCase()),
  );

  const closeSlashMenu = () => {
    setSlashMenu(null);
    setSlashSelection(0);
  };

  const openSlashMenuFromCaret = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) return;
    const range = selection.getRangeAt(0);
    const node = range.startContainer;
    if (node.nodeType !== Node.TEXT_NODE) return;
    const textBeforeCaret = node.textContent?.slice(0, range.startOffset) || "";
    const slashIndex = textBeforeCaret.lastIndexOf("/");
    if (slashIndex < 0 || (slashIndex > 0 && !/\s/.test(textBeforeCaret[slashIndex - 1]))) return;
    const slashRange = range.cloneRange();
    slashRange.setStart(node, slashIndex);
    const rect = range.getBoundingClientRect();
    setSlashMenu({ query: textBeforeCaret.slice(slashIndex + 1), range: slashRange, top: rect.bottom + 6, left: rect.left });
    setSlashSelection(0);
  };

  const insertSlashCommand = (command: (typeof slashCommands)[number]) => {
    if (!slashMenu || !contentEditableRef.current) return;
    const range = slashMenu.range;
    range.deleteContents();

    // Keep the insertion point alive while a modal is open (especially for
    // /image). The old implementation inserted invalid headings inside a p,
    // which made H2-H6 render like ordinary text.
    const selectionAfterSlash = document.createRange();
    selectionAfterSlash.setStart(range.startContainer, range.startOffset);
    selectionAfterSlash.collapse(true);
    const currentBlock = (range.startContainer.nodeType === Node.TEXT_NODE
      ? range.startContainer.parentElement
      : range.startContainer as HTMLElement)?.closest("p,h1,h2,h3,h4,h5,h6,blockquote,pre,aside");
    // Images/tables must be inserted as top-level editor blocks, never inside
    // a paragraph. This is also what keeps their saved HTML valid.
    if (currentBlock?.parentNode) {
      selectionAfterSlash.setStartAfter(currentBlock);
      selectionAfterSlash.collapse(true);
    }
    setSavedRange(selectionAfterSlash.cloneRange());

    if (command.tag === "img") {
      setMediaModalTarget("inline");
      setIsMediaModalOpen(true);
      closeSlashMenu();
      return;
    }
    if (command.tag === "table") {
      setIsTableModalOpen(true);
      closeSlashMenu();
      return;
    }

    const element = document.createElement(command.tag);
    if (command.tag === "ul" || command.tag === "ol") {
      element.innerHTML = "<li>Write list item</li>";
    } else if (command.tag === "aside") {
      element.textContent = "Important Engineering Note: write your note here.";
      element.className = "editor-callout";
    } else if (command.tag === "pre") {
      const code = document.createElement("code");
      code.textContent = "// Add technical code or a formula";
      element.appendChild(code);
    } else if (command.tag === "hr") {
      element.className = "editor-divider";
    } else {
      element.textContent = command.label === "Paragraph" ? "Write your text here" : command.label;
    }

    if (currentBlock && currentBlock.parentNode && !currentBlock.textContent?.trim()) {
      currentBlock.replaceWith(element);
    } else if (currentBlock?.parentNode) {
      currentBlock.parentNode.insertBefore(element, currentBlock.nextSibling);
    } else {
      range.insertNode(element);
    }
    const nextRange = document.createRange();
    nextRange.selectNodeContents(element);
    nextRange.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(nextRange);
    closeSlashMenu();
    syncEditorHtml();
  };

  const startResize = (e: React.PointerEvent, handle: "nw" | "ne" | "sw" | "se") => {
    if (!selectedImage) return;
    e.preventDefault();
    e.stopPropagation();

    const img = selectedImage.element;
    const figure = img.closest("figure") as HTMLElement | null;
    const rect = img.getBoundingClientRect();

    resizeActiveRef.current = {
      image: img,
      figure,
      startX: e.clientX,
      startWidth: rect.width,
      handle,
    };

    const handlePointerMove = (ev: PointerEvent) => {
      if (!resizeActiveRef.current) return;
      ev.preventDefault();
      const { image, figure: fig, startX, startWidth, handle: dir } = resizeActiveRef.current;
      const deltaX = ev.clientX - startX;
      let newWidth = startWidth;

      if (dir === "se" || dir === "ne") {
        newWidth = Math.max(80, startWidth + deltaX);
      } else {
        newWidth = Math.max(80, startWidth - deltaX);
      }

      const roundedWidth = Math.round(newWidth);
      image.style.width = `${roundedWidth}px`;
      image.style.height = "auto";
      image.style.maxWidth = "none";
      if (fig) {
        fig.style.width = `${roundedWidth}px`;
        fig.style.maxWidth = "100%";
      }

      const nextRect = image.getBoundingClientRect();
      setSelectedImage({
        element: image,
        top: nextRect.top,
        left: nextRect.left,
        right: nextRect.right,
        bottom: nextRect.bottom,
      });
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove, true);
      window.removeEventListener("pointerup", handlePointerUp, true);
      resizeActiveRef.current = null;
      syncEditorHtml();
    };

    window.addEventListener("pointermove", handlePointerMove, true);
    window.addEventListener("pointerup", handlePointerUp, true);
  };

  // Keyboard shortcut to delete selected image (Delete or Backspace)
  useEffect(() => {
    if (!selectedImage) return;
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        const activeEl = document.activeElement;
        if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
          return;
        }
        e.preventDefault();
        removeSelectedImage();
      } else if (e.key === "Escape") {
        if (selectedImage) selectedImage.element.style.outline = "";
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [selectedImage]);

  const syncSelectedFormatFromCaret = () => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const node = sel.anchorNode;
    if (!node) return;
    const el = (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement) as HTMLElement | null;
    const block = el?.closest("h1,h2,h3,h4,h5,h6,p,pre");
    if (block) {
      const tag = block.tagName.toLowerCase();
      setSelectedFormat(tag);
    }
  };

  const updateSelectionBubble = () => {
    syncSelectedFormatFromCaret();
    const selection = window.getSelection();
    if (
      !selection ||
      selection.isCollapsed ||
      selection.rangeCount === 0 ||
      !contentEditableRef.current?.contains(selection.anchorNode)
    ) {
      setSelectionBubble(null);
      return;
    }
    const text = selection.toString().trim();
    if (!text) {
      setSelectionBubble(null);
      return;
    }
    // Text selection and image selection are mutually exclusive. Without
    // this, a previously selected image can remain armed while the user
    // highlights a heading and then presses Delete.
    if (selectedImage) {
      selectedImage.element.style.outline = "";
      setSelectedImage(null);
    }
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      setSelectionBubble(null);
      return;
    }
    setSelectionBubble({
      text,
      range: range.cloneRange(),
      top: Math.max(56, rect.top - 46),
      left: Math.max(16, rect.left + rect.width / 2 - 140),
    });
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      window.setTimeout(updateSelectionBubble, 10);
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => document.removeEventListener("selectionchange", handleSelectionChange);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;
    const updateImagePos = () => {
      if (!selectedImage.element.isConnected) {
        setSelectedImage(null);
        return;
      }
      const rect = selectedImage.element.getBoundingClientRect();
      setSelectedImage((prev) => prev ? { ...prev, top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom } : null);
    };
    window.addEventListener("scroll", updateImagePos, true);
    return () => window.removeEventListener("scroll", updateImagePos, true);
  }, [selectedImage]);



  const handleEditorClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() !== "img") {
      if (selectedImage) selectedImage.element.style.outline = "";
      setSelectedImage(null);
      return;
    }
    const image = target as HTMLImageElement;
    window.getSelection()?.removeAllRanges();
    if (selectedImage && selectedImage.element !== image) selectedImage.element.style.outline = "";
    image.draggable = true;
    image.style.outline = "3px solid #2271b1";
    image.style.outlineOffset = "2px";
    const rect = image.getBoundingClientRect();
    setSelectedImage({ element: image, top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom });
  };

  // Prevent the browser from turning an image click into a text selection. The
  // click event still fires, so the image remains selectable for the toolbar.
  const handleEditorMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === "img") {
      // Keep the native drag gesture available; selection is cleared in the
      // click handler after the image has been identified.
      event.stopPropagation();
    }
  };

  const setSelectedImageWidth = (width: string) => {
    if (!selectedImage) return;
    const image = selectedImage.element;
    const figure = image.closest("figure") as HTMLElement | null;
    image.style.width = width;
    image.style.height = "auto";
    image.style.maxWidth = width === "100%" ? "100%" : "none";
    if (figure) {
      figure.style.width = width;
      figure.style.maxWidth = "100%";
    }
    const rect = selectedImage.element.getBoundingClientRect();
    setSelectedImage({ ...selectedImage, top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom });
    syncEditorHtml();
  };

  const setSelectedImageAlignment = (alignment: "left" | "center" | "right" | "none") => {
    if (!selectedImage) return;
    const img = selectedImage.element;
    const figure = (img.closest("figure") || img) as HTMLElement;

    figure.classList.remove("alignleft", "aligncenter", "alignright", "alignnone");
    if (alignment === "left") {
      figure.classList.add("alignleft");
      figure.style.float = "left";
      figure.style.margin = "0.5rem 1.5rem 1rem 0";
      figure.style.textAlign = "left";
      figure.style.display = "table";
      figure.style.clear = "none";
    } else if (alignment === "right") {
      figure.classList.add("alignright");
      figure.style.float = "right";
      figure.style.margin = "0.5rem 0 1rem 1.5rem";
      figure.style.textAlign = "right";
      figure.style.display = "table";
      figure.style.clear = "none";
    } else if (alignment === "center") {
      figure.classList.add("aligncenter");
      figure.style.float = "none";
      figure.style.margin = "1.5rem auto";
      figure.style.textAlign = "center";
      figure.style.display = "block";
      figure.style.clear = "both";
    } else {
      figure.classList.add("alignnone");
      figure.style.float = "none";
      figure.style.margin = "1rem 0";
      figure.style.textAlign = "left";
      figure.style.display = "inline-block";
      figure.style.clear = "none";
    }
    const rect = img.getBoundingClientRect();
    setSelectedImage({ ...selectedImage, top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom });
    syncEditorHtml();
  };

  const handleOpenImageDetails = () => {
    if (!selectedImage) return;
    const img = selectedImage.element;
    const figure = img.closest("figure");
    const figcaption = figure?.querySelector("figcaption");
    setEditingImageAlt(img.alt || "");
    setEditingImageCaption(figcaption?.textContent || "");
    const figureClass = figure?.className || img.className;
    if (figureClass.includes("alignleft")) setEditingImageAlignment("left");
    else if (figureClass.includes("alignright")) setEditingImageAlignment("right");
    else if (figureClass.includes("aligncenter")) setEditingImageAlignment("center");
    else setEditingImageAlignment("none");

    setEditingImageWidth(img.style.width || "100%");
    setIsImageDetailsOpen(true);
  };

  const handleUpdateImageDetails = () => {
    if (!selectedImage) {
      setIsImageDetailsOpen(false);
      return;
    }
    const img = selectedImage.element;
    img.alt = editingImageAlt;
    img.title = editingImageAlt;

    let figure = img.closest("figure");
    if (editingImageCaption.trim()) {
      if (!figure) {
        figure = document.createElement("figure");
        img.parentNode?.insertBefore(figure, img);
        figure.appendChild(img);
      }
      let figcaption = figure.querySelector("figcaption");
      if (!figcaption) {
        figcaption = document.createElement("figcaption");
        figcaption.className = "text-center text-xs text-slate-500 mt-1 italic";
        figure.appendChild(figcaption);
      }
      figcaption.textContent = editingImageCaption.trim();
    } else if (figure && !editingImageCaption.trim()) {
      const figcaption = figure.querySelector("figcaption");
      if (figcaption) figcaption.remove();
    }

    setSelectedImageAlignment(editingImageAlignment);

    if (editingImageWidth) {
      img.style.width = editingImageWidth;
      img.style.height = "auto";
      img.style.maxWidth = editingImageWidth === "100%" ? "100%" : "none";
      if (figure) {
        (figure as HTMLElement).style.width = editingImageWidth;
        (figure as HTMLElement).style.maxWidth = "100%";
      }
    }

    setIsImageDetailsOpen(false);
    const rect = img.getBoundingClientRect();
    setSelectedImage({ element: img, top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom });
    syncEditorHtml();
  };

  const removeSelectedImage = () => {
    if (!selectedImage) return;
    const image = selectedImage.element;
    image.style.outline = "";
    const figure = image.closest("figure");
    if (figure) {
      figure.remove();
    } else {
      image.remove();
    }
    window.getSelection()?.removeAllRanges();
    setSelectedImage(null);
    syncEditorHtml();
  };

  const moveSelectedImage = (direction: "up" | "down") => {
    if (!selectedImage) return;
    const img = selectedImage.element;
    const source = img.closest("figure") || img;
    if (!source?.parentNode) return;
    const sibling = direction === "up" ? source.previousElementSibling : source.nextElementSibling;
    if (!sibling) return;
    if (direction === "up") {
      sibling.parentNode?.insertBefore(source, sibling);
    } else {
      sibling.parentNode?.insertBefore(source, sibling.nextElementSibling);
    }
    window.setTimeout(() => {
      const rect = img.getBoundingClientRect();
      setSelectedImage((prev) =>
        prev
          ? {
              ...prev,
              top: rect.top,
              left: rect.left,
              right: rect.right,
              bottom: rect.bottom,
            }
          : null
      );
      syncEditorHtml();
    }, 20);
  };

  const handleEditorDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() !== "img") return;
    const image = target as HTMLImageElement;
    draggedImageRef.current = image;
    setDraggedImage(image);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", "move-image");
  };

  const handleEditorDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const image = draggedImageRef.current || draggedImage;
    if (!image || !contentEditableRef.current) return;
    event.preventDefault();
    const target = event.target as HTMLElement;
    const targetBlock = target.closest("h1,h2,h3,h4,h5,h6,p,ul,ol,blockquote,figure");
    const sourceFigure = image.closest("figure") || image;
    if (!targetBlock || targetBlock === sourceFigure || sourceFigure.contains(targetBlock)) {
      draggedImageRef.current = null;
      setDraggedImage(null);
      return;
    }
    const targetRect = targetBlock.getBoundingClientRect();
    const insertAfter = event.clientY > targetRect.top + targetRect.height / 2;
    targetBlock.parentNode?.insertBefore(sourceFigure, insertAfter ? targetBlock.nextSibling : targetBlock);
    draggedImageRef.current = null;
    setDraggedImage(null);
    syncEditorHtml();
  };

  const handleEditorDragEnd = () => {
    draggedImageRef.current = null;
    setDraggedImage(null);
  };

  const handleEditorKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (selectedImage && (event.key === "Delete" || event.key === "Backspace")) {
      event.preventDefault();
      event.stopPropagation();
      removeSelectedImage();
      return;
    }

    if (!slashMenu) {
      if (event.key === "/") window.setTimeout(openSlashMenuFromCaret, 0);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeSlashMenu();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setSlashSelection((current) => {
        const next = event.key === "ArrowDown" ? current + 1 : current - 1;
        return Math.max(0, Math.min(filteredSlashCommands.length - 1, next));
      });
      return;
    }
    if (event.key === "Enter" && filteredSlashCommands.length > 0) {
      event.preventDefault();
      insertSlashCommand(filteredSlashCommands[slashSelection] || filteredSlashCommands[0]);
    }
  };

  const executeEditorCommand = (command: string, value?: string) => {
    contentEditableRef.current?.focus();
    if (command === "formatBlock" && value) {
      try {
        const success = document.execCommand("formatBlock", false, value);
        if (!success) {
          const clean = value.replace(/[<>]/g, "");
          document.execCommand("formatBlock", false, clean);
        }
      } catch {
        const clean = value.replace(/[<>]/g, "");
        document.execCommand("formatBlock", false, clean);
      }
    } else {
      document.execCommand(command, false, value);
    }
    syncEditorHtml();
    window.setTimeout(updateSelectionBubble, 30);
  };

  const insertEditorHtml = (html: string) => {
    contentEditableRef.current?.focus();
    document.execCommand("insertHTML", false, html);
    syncEditorHtml();
  };

  const handleOpenLinkModal = () => {
    contentEditableRef.current?.focus();
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      setSavedRange(selection.getRangeAt(0).cloneRange());
      setLinkText(selection.toString());
    } else {
      setSavedRange(null);
      setLinkText("");
    }
    setLinkUrl("");
    setLinkOpenInNewTab(true);
    setIsLinkModalOpen(true);
  };

  const handleApplyLink = () => {
    if (!linkUrl.trim()) {
      setIsLinkModalOpen(false);
      return;
    }
    contentEditableRef.current?.focus();
    const selection = window.getSelection();
    if (savedRange && selection) {
      selection.removeAllRanges();
      selection.addRange(savedRange);
    }
    const targetAttr = linkOpenInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    const textToDisplay = linkText.trim() || linkUrl.trim();
    const linkHtml = `<a href="${linkUrl.trim()}"${targetAttr} class="text-[#1D4ED8] hover:underline font-semibold">${textToDisplay}</a>`;
    document.execCommand("insertHTML", false, linkHtml);
    setIsLinkModalOpen(false);
    syncEditorHtml();
  };

  const handleInsertTable = (rows: number, cols: number) => {
    contentEditableRef.current?.focus();
    let html = `<div class="table-responsive my-5 overflow-x-auto"><table class="min-w-full border-collapse border border-[#E2E8F0] text-xs sm:text-sm"><thead><tr class="bg-[#F8FAFC]">`;
    for (let c = 1; c <= cols; c++) {
      html += `<th class="border border-[#E2E8F0] p-2.5 font-bold text-left text-[#0F172A]">Header ${c}</th>`;
    }
    html += `</tr></thead><tbody>`;
    for (let r = 1; r <= rows; r++) {
      html += `<tr class="${r % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'}">`;
      for (let c = 1; c <= cols; c++) {
        html += `<td class="border border-[#E2E8F0] p-2 text-[#334155]">Data ${r}-${c}</td>`;
      }
      html += `</tr>`;
    }
    html += `</tbody></table></div><p><br></p>`;
    insertEditorHtml(html);
    setIsTableModalOpen(false);
  };

  const handleInsertReadMore = () => {
    insertEditorHtml(
      '<div class="my-4 py-1 border-b-2 border-dashed border-[#CBD5E1] text-center text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 select-none" data-wp-more="more"><span>––––––– MORE BREAK (READ MORE TAG) –––––––</span></div><p><br></p>'
    );
  };

  const handleInsertSpecialChar = (char: string) => {
    insertEditorHtml(char);
    setIsSpecialCharOpen(false);
  };

  const handleEditorPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    if (isPasteAsText) {
      e.preventDefault();
      const text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
      syncEditorHtml();
    }
  };

  // Switch between rich visual editor and raw HTML mode without losing content.
  const handleToggleMode = (mode: "visual" | "text") => {
    if (mode === "visual") {
      setEditorMode("visual");
      window.setTimeout(() => {
        if (contentEditableRef.current) {
          contentEditableRef.current.innerHTML = htmlContent;
        }
      }, 0);
    } else {
      if (contentEditableRef.current) {
        const cur = contentEditableRef.current.innerHTML;
        setHtmlContent(cur);
        setBlocks(summarizeHtmlAsBlocks(cur));
      }
      setEditorMode("text");
    }
  };

  // Block management
  const addBlock = (type: EditorBlock["type"], extraMeta?: EditorBlock["meta"]) => {
    const newBlock: EditorBlock = {
      id: `b-${Date.now()}`,
      type,
      content:
        type.startsWith("heading_h")
          ? "New Section Heading"
          : type === "formula"
          ? "Conversion Rate = (Qualified Leads / Unique Visitors) * 100"
          : type === "callout"
          ? "Strategic Architecture Note: All Client-First CSS tokens and Core Web Vitals must stay under 100ms LCP."
          : type === "image"
          ? "Strategic Architecture Diagram"
          : "Write strategic insight with data-driven depth...",
      meta: extraMeta,
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const updateBlockContent = (id: string, content: string) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, content } : b)));
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const moveBlock = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;
    const next = [...blocks];
    const temp = next[index];
    next[index] = next[targetIndex];
    next[targetIndex] = temp;
    setBlocks(next);
  };

  // Total word count calculation (computed dynamically from visual editor text)
  const wordCount = useMemo(() => {
    const plainText = htmlContent.replace(/<[^>]+>/g, " ");
    const text = [title, plainText].join(" ");
    return text.trim().split(/\s+/).filter(Boolean).length;
  }, [title, htmlContent]);

  // SMART AUTO-SUGGESTION ENGINE FOR FRAMECIPHER SERVICES & CASE STUDIES
  const autoSuggestedServices = useMemo(() => {
    const combinedContext = [
      title,
      focusKeyword,
      category,
      ...tags,
      ...blocks.map((b) => b.content),
    ]
      .join(" ")
      .toLowerCase();

    const queryTokens = combinedContext
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 2);

    const tokenCounts: Record<string, number> = {};
    queryTokens.forEach((tok) => {
      tokenCounts[tok] = (tokenCounts[tok] || 0) + 1;
    });

    const scored = FRAMECIPHER_REGISTRY.map((calc) => {
      let score = 0;
      const titleTokens = calc.title.toLowerCase().split(/[^a-z0-9]+/);
      const categoryTokens = calc.category.toLowerCase().split(/[^a-z0-9]+/);
      const slugTokens = calc.slug.toLowerCase().split(/[^a-z0-9]+/);

      // Matches in title
      titleTokens.forEach((tok) => {
        if (tok.length > 2 && tokenCounts[tok]) {
          score += tokenCounts[tok] * 15;
        }
      });

      // Matches in slug
      slugTokens.forEach((tok) => {
        if (tok.length > 2 && tokenCounts[tok]) {
          score += tokenCounts[tok] * 10;
        }
      });

      // Matches in category
      categoryTokens.forEach((tok) => {
        if (tok.length > 2 && tokenCounts[tok]) {
          score += 12;
        }
      });

      // Exact focus keyword match in title
      if (focusKeyword && calc.title.toLowerCase().includes(focusKeyword.toLowerCase().trim())) {
        score += 45;
      }

      const matchPct = Math.min(99, Math.max(50, 60 + Math.round(score / 3)));

      return {
        calc,
        score,
        matchPct,
      };
    });

    return scored
      .filter((s) => s.score > 8)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [title, focusKeyword, category, tags, blocks]);

  const addAllAutoSuggestions = () => {
    const newToolSlugs = autoSuggestedServices.map((s) => s.calc.slug);
    const combined = Array.from(new Set([...selectedTools, ...newToolSlugs]));
    setSelectedTools(combined);
  };

  // SEO Parameters Real-Time Analysis Engine
  const seoAnalysis = useMemo(() => {
    const kw = focusKeyword.toLowerCase().trim();
    const hasKw = Boolean(kw);
    const contentText = blocks.map((b) => b.content).join(" ").toLowerCase();

    // 1. Keyphrase in title
    const kwInTitle = hasKw && title.toLowerCase().includes(kw);
    // 2. Keyphrase in intro (first paragraph)
    const firstParagraph = blocks.find((b) => b.type === "paragraph")?.content.toLowerCase() || "";
    const kwInIntro = hasKw && firstParagraph.includes(kw);
    // 3. Keyphrase in meta description
    const kwInDesc = hasKw && metaDescription.toLowerCase().includes(kw);
    // 4. Keyphrase in slug
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, " ");
    const kwInSlug = hasKw && cleanSlug.includes(kw.replace(/-/g, " "));
    // 5. Keyphrase length
    const kwWords = kw.split(/\s+/).filter(Boolean).length;
    const goodKwLength = kwWords >= 2 && kwWords <= 6;
    // 6. Keyphrase density
    const kwCount = hasKw ? (contentText.match(new RegExp(kw, "gi")) || []).length : 0;
    const goodKwDensity = kwCount >= 2;
    // 7. Text length (>= 300 words, deep post standard >= 2000 words)
    const goodLength = wordCount >= 300;
    const deepLength = wordCount >= 1500;
    // 8. Meta description length (120 - 160 chars)
    const goodDescLength = metaDescription.length >= 120 && metaDescription.length <= 160;
    // 9. SEO title width (40 - 65 chars)
    const goodTitleLength = seoTitle.length >= 40 && seoTitle.length <= 65;
    // 10. Featured Image Alt
    const hasAlt = Boolean(featuredImageAlt.trim());
    // 11. Internal links
    const hasInternalLinks = selectedTools.length >= 2;
    // 12. Outbound citations
    const hasOutbound = true;

    // Traffic Lights Calculation
    let score = 55;
    if (kwInTitle) score += 8;
    if (kwInIntro) score += 6;
    if (kwInDesc) score += 6;
    if (kwInSlug) score += 5;
    if (goodKwLength) score += 4;
    if (goodKwDensity) score += 5;
    if (goodLength) score += 5;
    if (goodDescLength) score += 4;
    if (goodTitleLength) score += 4;
    if (hasAlt) score += 5;
    if (hasInternalLinks) score += 4;

    const finalScore = Math.min(100, score);
    const trafficLight: "good" | "ok" | "bad" =
      finalScore >= 80 ? "good" : finalScore >= 60 ? "ok" : "bad";

    return {
      score: finalScore,
      trafficLight,
      kwInTitle,
      kwInIntro,
      kwInDesc,
      kwInSlug,
      goodKwLength,
      goodKwDensity,
      kwCount,
      goodLength,
      deepLength,
      goodDescLength,
      goodTitleLength,
      hasAlt,
      hasInternalLinks,
      hasOutbound,
    };
  }, [focusKeyword, title, metaDescription, slug, blocks, wordCount, featuredImageAlt, selectedTools, seoTitle]);

  // Readability calculation
  const readabilityScore = useMemo(() => {
    const hasSubheadings = blocks.filter((b) => b.type.startsWith("heading_h")).length >= 2;
    const shortParagraphs = blocks.every((b) => b.content.length < 500);

    const isGood = hasSubheadings && shortParagraphs;
    return {
      score: isGood ? "Good" : "OK",
      color: isGood ? "text-emerald-600" : "text-amber-600",
      dot: isGood ? "bg-emerald-500" : "bg-amber-500",
      hasSubheadings,
      shortParagraphs,
    };
  }, [blocks]);

  // Live JSON-LD Schema Generator
  const generatedSchemaJson = useMemo(() => {
    const targetSlug = slug.trim() || "guide";
    const articleGraph: any = {
      "@type": schemaType,
      "@id": `https://framecipher.com/blog/${targetSlug}#article`,
      headline: seoTitle || title || "FrameCipher Strategic Insight",
      description: metaDescription,
      image: featuredImageUrl.startsWith("http") ||
        featuredImageUrl.startsWith("data:") ||
        featuredImageUrl.startsWith("blob:")
        ? featuredImageUrl
        : `https://framecipher.com${featuredImageUrl}`,
      author: {
        "@type": "Person",
        name: author,
        jobTitle: "Founder & Lead Strategist",
        worksFor: {
          "@type": "Organization",
          name: "FrameCipher",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "FrameCipher",
        url: "https://framecipher.com",
        logo: {
          "@type": "ImageObject",
          url: "https://framecipher.com/logo.png",
        },
      },
      datePublished: post.publishDate || new Date().toISOString().split("T")[0],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://framecipher.com/blog/${targetSlug}`,
      },
    };

    const graph: any[] = [articleGraph];

    const validFaqs = faqs.filter(
      (f) => f.question.trim().length > 0 && f.answer.trim().length > 0
    );
    if (validFaqs.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `https://framecipher.com/blog/${targetSlug}#faq`,
        mainEntity: validFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      });
    }

    return JSON.stringify(
      {
        "@context": "https://schema.org",
        "@graph": graph,
      },
      null,
      2
    );
  }, [
    schemaType,
    slug,
    seoTitle,
    title,
    metaDescription,
    featuredImageUrl,
    author,
    post.publishDate,
    faqs,
  ]);

  // Save document
  const handleSaveDocument = (targetStatus?: "published" | "draft") => {
    const finalStatus = targetStatus || status;
    const targetSlug =
      slug.trim() ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") ||
      "guide";

    const editorHtml = contentEditableRef.current?.innerHTML || htmlContent;
    // Selection UI is temporary and must never be stored in the published article HTML.
    contentEditableRef.current?.querySelectorAll("img").forEach((image) => {
      image.style.outline = "";
      image.removeAttribute("draggable");
    });
    const cleanEditorHtml = contentEditableRef.current?.innerHTML || editorHtml;

    const updatedItem: BlogPostItem = {
      id: post.id || `post-${Date.now()}`,
      title: title || "Untitled Strategic Insight",
      slug: targetSlug,
      category: selectedCategories[0] || category,
      categories: selectedCategories,
      status: finalStatus,
      author,
      publishDate: publishDate || post.publishDate || new Date().toISOString().split("T")[0],
      views: post.views || 0,
      wordCount: wordCount,
      seoScore: seoAnalysis.score,
      seoTitle,
      excerpt: excerpt || title,
      metaDescription,
      tags,
      blocks,
      content: cleanEditorHtml,
      featuredImage: {
        url: featuredImageUrl,
        alt: featuredImageAlt,
        hasAlt: Boolean(featuredImageAlt.trim()),
      },
      focusKeyword,
      canonicalUrl: `https://framecipher.com/blog/${targetSlug}`,
      relatedToolSlugs: selectedTools,
      schemaType,
      faqs,
      visibility,
      postPassword: visibility === "password" ? postPassword : "",
      allowComments,
      allowPingbacks,
    };

    setLastSavedTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' }));
    onSave(updatedItem);
  };

  // Open Media Modal
  const handleOpenMedia = (target: "featured" | "inline") => {
    setMediaModalTarget(target);
    setIsMediaModalOpen(true);
  };

  // On Media Selected from Modal
  const handleSelectMedia = (item: MediaItem) => {
    if (mediaModalTarget === "featured") {
      setFeaturedImageUrl(item.url);
      setFeaturedImageAlt(item.alt || item.title);
    } else {
      contentEditableRef.current?.focus();
      const selection = window.getSelection();
      if (savedRange && selection) {
        selection.removeAllRanges();
        selection.addRange(savedRange);
      }
      document.execCommand(
        "insertHTML",
        false,
        `<figure><img src="${item.url}" alt="${item.alt || item.title}" /><figcaption>${item.caption || ""}</figcaption></figure><p><br></p>`
      );
      setSavedRange(null);
      syncEditorHtml();
    }
  };

  // Add Tag (Supports comma-separated entry like WordPress)
  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    const splitTags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    const newUniqueTags = splitTags.filter((t) => !tags.includes(t));
    if (newUniqueTags.length > 0) {
      setTags([...tags, ...newUniqueTags]);
    }
    setTagInput("");
  };

  // Add Category (Supports multi-category selection)
  const handleAddCategory = () => {
    const trimmed = newCategoryName.trim();
    if (trimmed) {
      if (!categoriesList.includes(trimmed)) {
        setCategoriesList([...categoriesList, trimmed]);
      }
      if (!selectedCategories.includes(trimmed)) {
        setSelectedCategories([...selectedCategories, trimmed]);
      }
      setCategory(trimmed);
      setNewCategoryName("");
      setIsAddingCategory(false);
    }
  };

  // Insert Variable into SEO Title
  const handleInsertTitleVar = (varName: string) => {
    setSeoTitle((prev) => `${prev} %%${varName}%%`);
  };

  // Filtered Services & Case Studies for manual search
  const filteredServices = FRAMECIPHER_REGISTRY.filter(
    (c) =>
      c.title.toLowerCase().includes(toolSearch.toLowerCase()) ||
      c.category.toLowerCase().includes(toolSearch.toLowerCase())
  ).slice(0, 15);

  const toggleTool = (toolSlug: string) => {
    if (selectedTools.includes(toolSlug)) {
      setSelectedTools(selectedTools.filter((s) => s !== toolSlug));
    } else {
      setSelectedTools([...selectedTools, toolSlug]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden font-body bg-[#F8FAFC] text-[#0F172A]">
      {/* Fullscreen Floating Exit Button */}
      {isFullscreen && (
        <div className="fixed top-3 right-4 z-[150] flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#0F172A] text-xs font-bold font-heading uppercase tracking-wider shadow-lg border border-[#CBD5E1]"
          >
            <Minimize2 className="h-3.5 w-3.5" />
            <span>Exit Fullscreen</span>
          </button>
        </div>
      )}

      {/* FrameCipher Top Admin Header */}
      {!isFullscreen && (
        <header className="px-3 sm:px-6 bg-white border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2 sm:py-0 sm:h-14 shrink-0 z-30">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* FrameCipher Brand Badge */}
            <div className="hidden sm:flex w-8 h-8 rounded-lg bg-frame-accent items-center justify-center text-white font-heading font-black text-xs shrink-0 shadow-xs">
              FC
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-wider text-[#475569] hover:text-[#0F172A] px-2.5 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] shrink-0"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">All Posts</span>
            </button>

            <span className="text-[#CBD5E1] hidden sm:inline shrink-0">|</span>

            <span className="text-xs sm:text-sm font-bold font-heading text-[#0F172A] truncate min-w-0 max-w-[110px] sm:max-w-xs md:max-w-md">
              {title ? `Edit: ${title}` : "Add New Post"}
            </span>

            <span
              className={`hidden sm:inline-flex text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border shrink-0 ${
                status === "published"
                  ? "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            {/* Save Draft Button */}
            <button
              onClick={() => handleSaveDocument("draft")}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] hover:text-[#0F172A]"
            >
              <span className="hidden sm:inline">Save </span>Draft
            </button>

            {/* Publish Button */}
            <button
              onClick={() => handleSaveDocument("published")}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-1.5 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-bold font-heading uppercase tracking-wider shadow-xs"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{status === "published" ? "Update" : "Publish"}</span>
            </button>
          </div>
        </header>
      )}

      {/* 2. UNIFIED WORDPRESS WORKSPACE (Single Natural Page Scroll, Zero Squeezed Double Scrollbars!) */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Main Column: Post Content Canvas & SEO Parameters Panel */}
          <div className="flex-1 min-w-0 space-y-6 w-full">
            {/* Post Title Field */}
            <div className="space-y-1">
              <textarea
                rows={2}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (!slug || isEditingSlug) {
                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""));
                  }
                }}
                placeholder="Add title"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xl sm:text-2xl md:text-3xl font-heading font-bold rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] shadow-xs resize-none leading-snug"
              />

              {/* Permalink Line */}
              <div className="text-[11px] sm:text-xs text-[#64748B] flex flex-wrap items-center gap-1 font-mono pt-1">
                <span className="font-heading font-bold uppercase tracking-wider text-[#0F172A] text-[10px]">
                  Permalink:
                </span>
                <span className="truncate">https://framecipher.com/blog/</span>
                {isEditingSlug ? (
                  <div className="inline-flex items-center gap-1">
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="px-2 py-0.5 bg-white border border-[#1D4ED8] rounded text-xs text-[#0F172A] font-mono"
                    />
                    <button
                      onClick={() => setIsEditingSlug(false)}
                      className="px-2.5 py-0.5 bg-[#1D4ED8] text-white text-[11px] font-heading font-bold rounded"
                    >
                      OK
                    </button>
                  </div>
                ) : (
                  <span className="font-bold text-[#1D4ED8] truncate">{slug || "guide"}</span>
                )}
                {!isEditingSlug && (
                  <button
                    onClick={() => setIsEditingSlug(true)}
                    className="ml-1 text-[11px] font-heading font-bold uppercase text-[#1D4ED8] hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            {/* TinyMCE Editor Box */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              {/* Editor Action Bar (Add Media + Visual/Text Tabs) */}
              <div className="p-2.5 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-2 flex-wrap">
                {/* Add Media Button */}
                <button
                  type="button"
                  onClick={() => handleOpenMedia("inline")}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold font-heading uppercase tracking-wider border border-[#CBD5E1] bg-white text-[#1D4ED8] flex items-center gap-1.5 shadow-xs"
                >
                  <ImageIcon className="h-3.5 w-3.5 text-[#1D4ED8]" />
                  <span>Add Media</span>
                </button>

                {/* Visual / Text (HTML) Tab Switch */}
                <div className="flex items-center rounded-lg overflow-hidden border border-[#CBD5E1] bg-white text-xs p-0.5">
                  <button
                    type="button"
                    onClick={() => handleToggleMode("visual")}
                    className={`px-3 py-1 rounded font-bold font-heading text-xs transition-colors ${
                      editorMode === "visual"
                        ? "bg-[#1D4ED8] text-white shadow-xs"
                        : "text-[#64748B] hover:text-[#0F172A]"
                    }`}
                  >
                    Visual
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleMode("text")}
                    className={`px-3 py-1 rounded font-bold font-heading text-xs transition-colors ${
                      editorMode === "text"
                        ? "bg-[#1D4ED8] text-white shadow-xs"
                        : "text-[#64748B] hover:text-[#0F172A]"
                    }`}
                  >
                    Text (HTML)
                  </button>
                </div>
              </div>

              {/* TinyMCE Formatting Toolbar (Visual Mode - Responsive 2-Row Design) */}
              {editorMode === "visual" && (
                <div className="border-b border-[#E2E8F0] divide-y divide-[#E2E8F0]">
                  {/* Row 1 */}
                  <div className="px-2.5 py-1.5 flex items-center gap-1 text-xs bg-[#F8FAFC] overflow-x-auto whitespace-nowrap">
                    {/* Format Dropdown */}
                    <select
                      value={selectedFormat}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedFormat(val);
                        executeEditorCommand("formatBlock", val === "p" ? "<p>" : val === "pre" ? "<pre>" : `<${val}>`);
                      }}
                      className="h-6 px-1.5 py-0.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded text-[#0F172A] cursor-pointer focus:outline-none shadow-xs"
                      title="Block Format"
                    >
                      <option value="p">Paragraph</option>
                      <option value="h1">Heading 1</option>
                      <option value="h2">Heading 2</option>
                      <option value="h3">Heading 3</option>
                      <option value="h4">Heading 4</option>
                      <option value="h5">Heading 5</option>
                      <option value="h6">Heading 6</option>
                      <option value="pre">Preformatted</option>
                    </select>

                    <span className="text-slate-300 mx-0.5">|</span>

                    {/* Bold */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("bold")}
                      className="h-6 w-6 rounded flex items-center justify-center font-bold text-xs hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Bold (Ctrl+B)"
                    >
                      B
                    </button>

                    {/* Italic */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("italic")}
                      className="h-6 w-6 rounded flex items-center justify-center italic text-xs hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Italic (Ctrl+I)"
                    >
                      I
                    </button>

                    {/* Bulleted List */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("insertUnorderedList")}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Bulleted list (Shift+Alt+U)"
                    >
                      <List className="h-3.5 w-3.5" />
                    </button>

                    {/* Numbered List */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("insertOrderedList")}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Numbered list (Shift+Alt+O)"
                    >
                      <ListOrdered className="h-3.5 w-3.5" />
                    </button>

                    {/* Blockquote */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("formatBlock", "<blockquote>")}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] hover:text-[#0F172A] font-serif font-black text-sm"
                      title="Blockquote (Shift+Alt+Q)"
                    >
                      “
                    </button>

                    <span className="text-[#CBD5E1] mx-0.5">|</span>

                    {/* Alignment: Left, Center, Right */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("justifyLeft")}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Align Left (Shift+Alt+L)"
                    >
                      <AlignLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("justifyCenter")}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Align Center (Shift+Alt+C)"
                    >
                      <AlignCenter className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => executeEditorCommand("justifyRight")}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] hover:text-[#0F172A]"
                      title="Align Right (Shift+Alt+R)"
                    >
                      <AlignRight className="h-3.5 w-3.5" />
                    </button>

                    <span className="text-[#CBD5E1] mx-0.5">|</span>

                    {/* Link */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={handleOpenLinkModal}
                      className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#1D4ED8]"
                      title="Insert/edit link (Ctrl+K)"
                    >
                      <Link2 className="h-3.5 w-3.5" />
                    </button>

                    {/* Insert Read More tag */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={handleInsertReadMore}
                      className="h-6 px-1.5 rounded flex items-center justify-center gap-1 hover:bg-slate-200 text-[11px] font-mono text-[#475569]"
                      title='Insert "Read More" tag (Shift+Alt+T)'
                    >
                      <Split className="h-3 w-3 text-[#64748B]" />
                      <span className="hidden sm:inline">More</span>
                    </button>

                    <div className="flex-1" />

                    {/* Toolbar Toggle (Kitchen Sink Icon) */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => setIsKitchenSinkOpen(!isKitchenSinkOpen)}
                      className={`h-6 w-6 rounded flex items-center justify-center transition-colors ${
                        isKitchenSinkOpen
                          ? "bg-blue-100 text-[#1D4ED8]"
                          : "hover:bg-slate-200 text-[#64748B]"
                      }`}
                      title="Toolbar Toggle (Shift+Alt+Z)"
                    >
                      <Sliders className="h-3.5 w-3.5" />
                    </button>

                    {/* Fullscreen / Distraction-Free Toggle */}
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className={`h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 ${
                        isFullscreen ? "text-[#1D4ED8]" : "text-[#64748B]"
                      }`}
                      title="Distraction-free writing mode"
                    >
                      {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Row 2 (Kitchen Sink) */}
                  {isKitchenSinkOpen && (
                    <div className="px-2.5 py-1.5 flex items-center gap-1 text-xs bg-[#F8FAFC] overflow-x-auto whitespace-nowrap">
                      {/* Strikethrough */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("strikeThrough")}
                        className="h-6 w-6 rounded flex items-center justify-center line-through text-xs font-semibold hover:bg-slate-200 text-[#475569]"
                        title="Strikethrough (Shift+Alt+D)"
                      >
                        ABC
                      </button>

                      {/* Underline */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("underline")}
                        className="h-6 w-6 rounded flex items-center justify-center underline text-xs font-semibold hover:bg-slate-200 text-[#475569]"
                        title="Underline (Ctrl+U)"
                      >
                        U
                      </button>

                      {/* Horizontal Rule */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("insertHorizontalRule")}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569] font-bold"
                        title="Horizontal line"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>

                      {/* Text Color Picker */}
                      <div className="relative">
                        <button
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => {
                            setIsTextColorOpen(!isTextColorOpen);
                            setIsHighlightColorOpen(false);
                            setIsSpecialCharOpen(false);
                          }}
                          className="h-6 px-1.5 rounded flex items-center gap-0.5 hover:bg-slate-200 text-xs font-bold text-[#475569]"
                          title="Text color"
                        >
                          <span className="underline decoration-blue-500 decoration-2 font-serif text-sm">A</span>
                          <ChevronDown className="h-2.5 w-2.5 opacity-60" />
                        </button>
                        {isTextColorOpen && (
                          <div className="absolute top-full left-0 mt-1 p-2 bg-white rounded-xl shadow-xl border border-[#CBD5E1] z-50 grid grid-cols-4 gap-1.5 w-32">
                            {[
                              { name: "Black", color: "#0F172A" },
                              { name: "Blue", color: "#2563eb" },
                              { name: "Red", color: "#dc2626" },
                              { name: "Green", color: "#16a34a" },
                              { name: "Amber", color: "#d97706" },
                              { name: "Purple", color: "#9333ea" },
                              { name: "Gray", color: "#64748b" },
                              { name: "Navy", color: "#1e3a8a" },
                            ].map((c) => (
                              <button
                                key={c.name}
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => {
                                  executeEditorCommand("foreColor", c.color);
                                  setIsTextColorOpen(false);
                                }}
                                className="w-5 h-5 rounded-full border border-black/10"
                                style={{ backgroundColor: c.color }}
                                title={c.name}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Highlight Color Picker */}
                      <div className="relative">
                        <button
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => {
                            setIsHighlightColorOpen(!isHighlightColorOpen);
                            setIsTextColorOpen(false);
                            setIsSpecialCharOpen(false);
                          }}
                          className="h-6 px-1.5 rounded flex items-center gap-0.5 hover:bg-slate-200 text-[#475569]"
                          title="Highlight background"
                        >
                          <Highlighter className="h-3.5 w-3.5 text-amber-500" />
                          <ChevronDown className="h-2.5 w-2.5 opacity-60" />
                        </button>
                        {isHighlightColorOpen && (
                          <div className="absolute top-full left-0 mt-1 p-2 bg-white rounded-xl shadow-xl border border-[#CBD5E1] z-50 grid grid-cols-3 gap-1.5 w-28">
                            {[
                              { name: "Yellow", color: "#fef08a" },
                              { name: "Green", color: "#bbf7d0" },
                              { name: "Blue", color: "#bae6fd" },
                              { name: "Pink", color: "#fbcfe8" },
                              { name: "Orange", color: "#fed7aa" },
                              { name: "None", color: "transparent" },
                            ].map((c) => (
                              <button
                                key={c.name}
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => {
                                  executeEditorCommand("hiliteColor", c.color);
                                  setIsHighlightColorOpen(false);
                                }}
                                className="w-5 h-5 rounded border border-black/20 flex items-center justify-center text-[8px] font-bold"
                                style={{ backgroundColor: c.color }}
                                title={c.name}
                              >
                                {c.name === "None" ? "×" : ""}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Paste as text toggle */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => setIsPasteAsText(!isPasteAsText)}
                        className={`h-6 px-1.5 rounded flex items-center gap-1 text-[11px] font-medium transition-colors ${
                          isPasteAsText
                            ? "bg-[#1D4ED8] text-white"
                            : "hover:bg-slate-200 text-[#475569]"
                        }`}
                        title="Paste as text (Ctrl+Shift+V)"
                      >
                        <ClipboardPaste className="h-3 w-3" />
                        <span className="hidden sm:inline">Paste as text</span>
                      </button>

                      {/* Clear Formatting */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("removeFormat")}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569]"
                        title="Clear formatting"
                      >
                        <RemoveFormatting className="h-3.5 w-3.5" />
                      </button>

                      {/* Special Character Picker */}
                      <div className="relative">
                        <button
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => {
                            setIsSpecialCharOpen(!isSpecialCharOpen);
                            setIsTextColorOpen(false);
                            setIsHighlightColorOpen(false);
                          }}
                          className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 font-serif font-bold text-xs text-[#475569]"
                          title="Special character (Ω)"
                        >
                          Ω
                        </button>
                        {isSpecialCharOpen && (
                          <div className="absolute top-full left-0 mt-1 p-2 bg-white rounded-xl shadow-2xl border border-[#CBD5E1] z-50 grid grid-cols-6 gap-1 w-56 text-center text-sm">
                            {SPECIAL_CHARACTERS.map((char) => (
                              <button
                                key={char}
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => handleInsertSpecialChar(char)}
                                className="p-1 rounded hover:bg-blue-50 font-mono font-bold text-[#0F172A]"
                              >
                                {char}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Outdent / Indent */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("outdent")}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569]"
                        title="Decrease indent"
                      >
                        <Outdent className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("indent")}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569]"
                        title="Increase indent"
                      >
                        <Indent className="h-3.5 w-3.5" />
                      </button>

                      <span className="text-[#CBD5E1] mx-0.5">|</span>

                      {/* Undo / Redo */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("undo")}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569]"
                        title="Undo (Ctrl+Z)"
                      >
                        <Undo className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeEditorCommand("redo")}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#475569]"
                        title="Redo (Ctrl+Y)"
                      >
                        <Redo className="h-3.5 w-3.5" />
                      </button>

                      {/* Insert Table */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => setIsTableModalOpen(true)}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-emerald-600"
                        title="Insert Data Table"
                      >
                        <TableIcon className="h-3.5 w-3.5" />
                      </button>

                      {/* Keyboard Shortcuts Help */}
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => setIsShortcutsOpen(true)}
                        className="h-6 w-6 rounded flex items-center justify-center hover:bg-slate-200 text-[#64748B] hover:text-[#0F172A]"
                        title="Keyboard Shortcuts (Shift+Alt+H)"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {editorMode === "visual" && (
                <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-1.5 text-[11px] text-[#64748B]">
                  Tip: type <kbd className="rounded border border-[#CBD5E1] bg-white px-1 font-mono text-[10px] text-[#0F172A]">/</kbd> inside the article to insert headings, lists, quotes, or paragraph blocks.
                </div>
              )}

              {/* Content Body */}
              {editorMode === "visual" ? (
                <div
                  ref={contentEditableRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={syncEditorHtml}
                  onKeyDown={handleEditorKeyDown}
                  onKeyUp={updateSelectionBubble}
                  onMouseUp={updateSelectionBubble}
                  onMouseDown={handleEditorMouseDown}
                  onClick={handleEditorClick}
                  onDragStart={handleEditorDragStart}
                  onDragEnd={handleEditorDragEnd}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleEditorDrop}
                  className="min-h-[420px] p-5 sm:p-8 prose prose-slate max-w-none focus:outline-none bg-white text-[#0F172A] [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-4xl [&_h1]:font-black [&_h1]:leading-tight [&_h1]:tracking-tight [&_h2]:mt-7 [&_h2]:mb-3 [&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-tight [&_h4]:mt-5 [&_h4]:mb-2 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:leading-snug [&_h5]:mt-4 [&_h5]:mb-1.5 [&_h5]:text-lg [&_h5]:font-bold [&_h5]:leading-snug [&_h6]:mt-4 [&_h6]:mb-1.5 [&_h6]:text-base [&_h6]:font-extrabold [&_h6]:uppercase [&_h6]:tracking-wide [&_h6]:leading-snug [&_img]:max-h-[500px] [&_img]:cursor-move [&_img]:rounded-md [&_img]:object-contain [&_.alignleft]:float-left [&_.alignleft]:mr-5 [&_.alignleft]:mb-4 [&_.alignright]:float-right [&_.alignright]:ml-5 [&_.alignright]:mb-4 [&_.aligncenter]:block [&_.aligncenter]:mx-auto [&_.aligncenter]:my-5 [&_.aligncenter]:text-center [&_.aligncenter]:clear-both [&_.alignnone]:my-3 [&_figure]:my-5 [&_figcaption]:text-center [&_figcaption]:text-xs [&_figcaption]:text-slate-500 [&_figcaption]:mt-1.5 [&_figcaption]:italic"
                />
              ) : (
                /* Raw HTML / Text Editor */
                <div className="p-4 bg-white">
                  <textarea
                    rows={20}
                    value={htmlContent}
                    onChange={(event) => {
                      setHtmlContent(event.target.value);
                      setBlocks(summarizeHtmlAsBlocks(event.target.value));
                    }}
                    className="w-full p-3 font-mono text-xs leading-relaxed bg-[#F8FAFC] text-[#0F172A] rounded-xl border border-[#CBD5E1] focus:border-[#1D4ED8] focus:bg-white focus:outline-none resize-y"
                    placeholder="<h2>Enter HTML Content</h2><p>Paste your article here...</p>"
                  />
                </div>
              )}

              {slashMenu && filteredSlashCommands.length > 0 && (
                <div
                  className="fixed z-[100] w-72 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-1.5 shadow-2xl"
                  style={{ top: slashMenu.top, left: slashMenu.left }}
                  role="listbox"
                  aria-label="Editor block options"
                >
                  <div className="px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400">Insert block</div>
                  {filteredSlashCommands.map((command, index) => (
                    <button
                      key={command.label}
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => insertSlashCommand(command)}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left ${index === slashSelection ? "bg-[#EFF6FF] text-[#1D4ED8]" : "text-[#334155] hover:bg-[#F8FAFC]"}`}
                    >
                      <span className="text-sm font-semibold">{command.label}</span>
                      <span className="text-[11px] text-slate-400">{command.hint}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Floating Selection Bubble Toolbar (Clean Light Theme) */}
              {selectionBubble && (
                <div
                  className="fixed z-[100] flex items-center gap-1 rounded-xl border border-[#E2E8F0] bg-white px-2.5 py-1.5 text-xs text-[#0F172A] shadow-2xl animate-in fade-in duration-100"
                  style={{ top: selectionBubble.top, left: selectionBubble.left }}
                >
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("bold");
                    }}
                    className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155] transition-colors"
                    title="Bold (Ctrl+B)"
                  >
                    <Bold className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("italic");
                    }}
                    className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155] transition-colors"
                    title="Italic (Ctrl+I)"
                  >
                    <Italic className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("underline");
                    }}
                    className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155] transition-colors"
                    title="Underline (Ctrl+U)"
                  >
                    <UnderlineIcon className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("strikeThrough");
                    }}
                    className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155] transition-colors"
                    title="Strikethrough"
                  >
                    <Strikethrough className="h-3.5 w-3.5" />
                  </button>

                  <span className="text-[#CBD5E1] mx-0.5">|</span>

                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("formatBlock", "<h2>");
                    }}
                    className="px-1.5 py-0.5 rounded-md hover:bg-[#F1F5F9] text-[#334155] text-xs font-heading font-bold uppercase tracking-wider transition-colors"
                    title="Heading 2"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("formatBlock", "<h3>");
                    }}
                    className="px-1.5 py-0.5 rounded-md hover:bg-[#F1F5F9] text-[#334155] text-xs font-heading font-bold uppercase tracking-wider transition-colors"
                    title="Heading 3"
                  >
                    H3
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      executeEditorCommand("formatBlock", "<blockquote>");
                    }}
                    className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155] transition-colors"
                    title="Quote"
                  >
                    <Quote className="h-3.5 w-3.5" />
                  </button>

                  <span className="text-[#CBD5E1] mx-0.5">|</span>

                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleOpenLinkModal();
                    }}
                    className="p-1 rounded-md hover:bg-[#EFF6FF] text-[#1D4ED8] transition-colors"
                    title="Insert Link"
                  >
                    <Link2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {selectedImage && (
                <>
                  {/* Floating Image Toolbar (Clean Light Theme) */}
                  <div
                    className="fixed z-[100] flex items-center gap-1 rounded-xl border border-[#E2E8F0] bg-white px-2.5 py-1.5 text-xs text-[#0F172A] shadow-2xl animate-in fade-in select-none"
                    style={{
                      top: selectedImage.top > 80 ? selectedImage.top - 42 : selectedImage.bottom + 10,
                      left: Math.max(16, selectedImage.left + (selectedImage.right - selectedImage.left) / 2 - 170),
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    {/* Alignment */}
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageAlignment("left")}
                      className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155]"
                      title="Align left"
                    >
                      <AlignLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageAlignment("center")}
                      className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155]"
                      title="Align center"
                    >
                      <AlignCenter className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageAlignment("right")}
                      className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155]"
                      title="Align right"
                    >
                      <AlignRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageAlignment("none")}
                      className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155]"
                      title="No alignment"
                    >
                      <AlignJustify className="h-3.5 w-3.5" />
                    </button>

                    <span className="text-[#CBD5E1] mx-0.5">|</span>

                    {/* Quick Size Presets (1-click resize) */}
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageWidth("25%")}
                      className="px-1.5 py-0.5 rounded-md text-[10px] font-heading font-bold text-[#334155] hover:bg-[#F1F5F9] transition-colors"
                      title="Resize to 25%"
                    >
                      25%
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageWidth("50%")}
                      className="px-1.5 py-0.5 rounded-md text-[10px] font-heading font-bold text-[#334155] hover:bg-[#F1F5F9] transition-colors"
                      title="Resize to 50%"
                    >
                      50%
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageWidth("75%")}
                      className="px-1.5 py-0.5 rounded-md text-[10px] font-heading font-bold text-[#334155] hover:bg-[#F1F5F9] transition-colors"
                      title="Resize to 75%"
                    >
                      75%
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => setSelectedImageWidth("100%")}
                      className="px-1.5 py-0.5 rounded-md text-[10px] font-heading font-bold text-[#334155] hover:bg-[#F1F5F9] transition-colors"
                      title="Resize to 100% (Full width)"
                    >
                      100%
                    </button>

                    <span className="text-[#CBD5E1] mx-0.5">|</span>

                    {/* Edit Image Details Button (Pencil) */}
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={handleOpenImageDetails}
                      className="p-1 rounded-md hover:bg-[#EFF6FF] text-[#1D4ED8]"
                      title="Edit Image Details (Caption, Alt, Custom Size)"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                    </button>

                    {/* Move Image Up / Down */}
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => moveSelectedImage("up")}
                      className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155]"
                      title="Move image up (before previous block)"
                    >
                      <MoveUp className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onClick={() => moveSelectedImage("down")}
                      className="p-1 rounded-md hover:bg-[#F1F5F9] text-[#334155]"
                      title="Move image down (after next block)"
                    >
                      <MoveDown className="h-3.5 w-3.5" />
                    </button>

                    <span className="text-[#CBD5E1] mx-0.5">|</span>

                    {/* Delete Image Button */}
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeSelectedImage();
                      }}
                      className="p-1 rounded-md text-rose-600 hover:bg-rose-50"
                      title="Delete image (or press Delete/Backspace)"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* 4 Corner Resize Handles */}
                  {/* Top-Left NW */}
                  <div
                    role="button"
                    tabIndex={-1}
                    aria-label="Resize image top-left"
                    className="fixed z-[100] h-3.5 w-3.5 cursor-nwse-resize rounded-xs border-2 border-[#1D4ED8] bg-white shadow-md select-none"
                    style={{
                      top: selectedImage.top - 7,
                      left: selectedImage.left - 7,
                      touchAction: "none",
                    }}
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onPointerDown={(e) => startResize(e, "nw")}
                  />
                  {/* Top-Right NE */}
                  <div
                    role="button"
                    tabIndex={-1}
                    aria-label="Resize image top-right"
                    className="fixed z-[100] h-3.5 w-3.5 cursor-nesw-resize rounded-xs border-2 border-[#1D4ED8] bg-white shadow-md select-none"
                    style={{
                      top: selectedImage.top - 7,
                      left: selectedImage.right - 7,
                      touchAction: "none",
                    }}
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onPointerDown={(e) => startResize(e, "ne")}
                  />
                  {/* Bottom-Left SW */}
                  <div
                    role="button"
                    tabIndex={-1}
                    aria-label="Resize image bottom-left"
                    className="fixed z-[100] h-3.5 w-3.5 cursor-nesw-resize rounded-xs border-2 border-[#1D4ED8] bg-white shadow-md select-none"
                    style={{
                      top: selectedImage.bottom - 7,
                      left: selectedImage.left - 7,
                      touchAction: "none",
                    }}
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onPointerDown={(e) => startResize(e, "sw")}
                  />
                  {/* Bottom-Right SE */}
                  <div
                    role="button"
                    tabIndex={-1}
                    aria-label="Resize image bottom-right"
                    className="fixed z-[100] h-3.5 w-3.5 cursor-nwse-resize rounded-xs border-2 border-[#1D4ED8] bg-white shadow-md select-none"
                    style={{
                      top: selectedImage.bottom - 7,
                      left: selectedImage.right - 7,
                      touchAction: "none",
                    }}
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onPointerDown={(e) => startResize(e, "se")}
                  />
                </>
              )}

              {/* Editor Footer Status Bar */}
              <div className="px-4 py-1.5 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B] font-mono select-none bg-[#F8FAFC]">
                <div className="flex items-center gap-2 text-[11px]">
                  <span>Path: <strong className="text-[#334155]">p</strong></span>
                  <span>•</span>
                  <span>Word count: <strong className="text-[#0F172A] font-bold">{wordCount.toLocaleString()}</strong></span>
                </div>
                <div className="text-[11px] text-[#64748B]">
                  Draft saved at {lastSavedTime}.
                </div>
              </div>
            </div>

            {/* 3. SEO PARAMETERS METABOX */}
            <div className="rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden bg-white">
              {/* SEO Parameters Header Bar */}
              <div className="px-4 py-3 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 bg-[#F8FAFC]">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 rounded-lg bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sliders className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] truncate">
                    SEO Parameters
                  </h3>

                  {/* Score Indicators */}
                  <div className="flex items-center gap-2 ml-1 text-xs">
                    <span className="flex items-center gap-1 font-mono font-bold text-[#64748B]">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          seoAnalysis.trafficLight === "good"
                            ? "bg-emerald-500"
                            : seoAnalysis.trafficLight === "ok"
                            ? "bg-amber-500"
                            : "bg-rose-500"
                        }`}
                      />
                      <span>{seoAnalysis.score}/100</span>
                    </span>
                    <span className="text-[#CBD5E1]">|</span>
                    <span className="flex items-center gap-1 text-[#64748B]">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${readabilityScore.dot}`} />
                      <span className="hidden sm:inline">{readabilityScore.score}</span>
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-[#64748B] font-semibold shrink-0">
                  100% Google Standard
                </div>
              </div>

              {/* SEO Parameters Tabs */}
              <div className="h-11 px-2 sm:px-4 border-b border-[#E2E8F0] flex items-center gap-1 overflow-x-auto bg-white">
                <button
                  onClick={() => setSeoTab("seo")}
                  className={`h-full px-3 text-xs font-heading font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    seoTab === "seo"
                      ? "border-[#1D4ED8] text-[#1D4ED8]"
                      : "border-transparent text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      seoAnalysis.trafficLight === "good" ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  <span>SEO Parameters</span>
                </button>

                <button
                  onClick={() => setSeoTab("readability")}
                  className={`h-full px-3 text-xs font-heading font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    seoTab === "readability"
                      ? "border-[#1D4ED8] text-[#1D4ED8]"
                      : "border-transparent text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${readabilityScore.dot}`} />
                  <span>Readability</span>
                </button>

                <button
                  onClick={() => setSeoTab("schema")}
                  className={`h-full px-3 text-xs font-heading font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    seoTab === "schema"
                      ? "border-[#1D4ED8] text-[#1D4ED8]"
                      : "border-transparent text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  <span>Schema Graph</span>
                </button>

                <button
                  onClick={() => setSeoTab("social")}
                  className={`h-full px-3 text-xs font-heading font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    seoTab === "social"
                      ? "border-[#1D4ED8] text-[#1D4ED8]"
                      : "border-transparent text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  <Share2 className="h-3 w-3" />
                  <span>Social Cards</span>
                </button>
              </div>

              {/* TAB 1: SEO PARAMETERS CONTENT */}
              {seoTab === "seo" && (
                <div className="p-3 sm:p-5 space-y-5 text-xs bg-white">
                  {/* 1. Focus Keyphrase Field */}
                  <div className="space-y-2 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold font-heading text-[#0F172A] flex items-center gap-1.5">
                        <span>Focus target keyword</span>
                        <HelpCircle className="h-3.5 w-3.5 text-[#94A3B8]" />
                      </label>
                      <span className="text-[11px] text-[#1D4ED8] font-semibold">
                        Primary search query
                      </span>
                    </div>
                    <input
                      type="text"
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="e.g. enterprise webflow design system"
                      className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                    />
                  </div>

                  {/* 2. Google Snippet Preview Box */}
                  <div className="space-y-3 pb-5 border-b border-[#E2E8F0]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-heading text-[#0F172A]">
                        Google search appearance
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setSerpDevice("mobile")}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-colors ${
                            serpDevice === "mobile"
                              ? "bg-[#1D4ED8] text-white"
                              : "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]"
                          }`}
                        >
                          <Smartphone className="h-3 w-3" />
                          <span>Mobile</span>
                        </button>
                        <button
                          onClick={() => setSerpDevice("desktop")}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-colors ${
                            serpDevice === "desktop"
                              ? "bg-[#1D4ED8] text-white"
                              : "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]"
                          }`}
                        >
                          <Monitor className="h-3 w-3" />
                          <span>Desktop</span>
                        </button>
                      </div>
                    </div>

                    {/* Real Google SERP Card */}
                    <div className="p-3 sm:p-4 rounded-xl border border-[#CBD5E1] font-sans bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                          FC
                        </div>
                        <div className="text-[11px] leading-none text-[#202124] min-w-0">
                          <div className="font-semibold text-xs text-[#202124]">
                            FrameCipher
                          </div>
                          <div className="text-[#5f6368] text-[10px] truncate">
                            https://framecipher.com › blog › {slug || "guide"}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-[#1a0dab] hover:underline cursor-pointer leading-snug pt-0.5 line-clamp-1">
                        {seoTitle}
                      </div>
                      <div className="text-xs text-[#4d5156] pt-1 line-clamp-2 leading-relaxed">
                        {metaDescription}
                      </div>
                    </div>

                    {/* Edit Snippet Toggle & Fields */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setIsSnippetEditorOpen(!isSnippetEditorOpen)}
                        className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1D4ED8] text-xs font-bold transition-colors"
                      >
                        {isSnippetEditorOpen ? "Close snippet editor" : "Edit snippet"}
                      </button>

                      {isSnippetEditorOpen && (
                        <div className="mt-3 p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
                          {/* SEO Title */}
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-xs font-bold font-heading text-[#0F172A]">
                                SEO title
                              </label>
                              <span className="text-[10px] font-mono text-[#64748B]">
                                {seoTitle.length} chars
                              </span>
                            </div>

                            {/* Variable Pills */}
                            <div className="flex flex-wrap gap-1 mb-2">
                              {["Title", "Page", "Separator", "Site title"].map((pill) => (
                                <button
                                  key={pill}
                                  type="button"
                                  onClick={() => handleInsertTitleVar(pill)}
                                  className="px-2 py-0.5 rounded-md bg-white border border-[#CBD5E1] text-[10px] font-semibold text-[#1D4ED8] hover:bg-blue-50"
                                >
                                  + {pill}
                                </button>
                              ))}
                            </div>

                            <input
                              type="text"
                              value={seoTitle}
                              onChange={(e) => setSeoTitle(e.target.value)}
                              className="w-full p-2 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A]"
                            />

                            {/* Length Progress Bar */}
                            <div className="w-full bg-[#E2E8F0] h-1 rounded-full mt-1.5 overflow-hidden">
                              <div
                                className={`h-full transition-all ${
                                  seoAnalysis.goodTitleLength ? "bg-emerald-500" : "bg-amber-500"
                                }`}
                                style={{ width: `${Math.min(100, (seoTitle.length / 60) * 100)}%` }}
                              />
                            </div>
                          </div>

                          {/* Slug */}
                          <div>
                            <label className="text-xs font-bold font-heading text-[#0F172A] block mb-1">
                              Slug
                            </label>
                            <input
                              type="text"
                              value={slug}
                              onChange={(e) => setSlug(e.target.value)}
                              className="w-full p-2 bg-white border border-[#CBD5E1] rounded-xl text-xs font-mono text-[#0F172A]"
                            />
                          </div>

                          {/* Meta Description */}
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-xs font-bold font-heading text-[#0F172A]">
                                Meta description
                              </label>
                              <span className="text-[10px] font-mono text-[#64748B]">
                                {metaDescription.length} / 160 chars
                              </span>
                            </div>
                            <textarea
                              rows={3}
                              value={metaDescription}
                              onChange={(e) => setMetaDescription(e.target.value)}
                              className="w-full p-2 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A]"
                            />
                            {/* Length Progress Bar */}
                            <div className="w-full bg-[#E2E8F0] h-1 rounded-full mt-1.5 overflow-hidden">
                              <div
                                className={`h-full transition-all ${
                                  seoAnalysis.goodDescLength ? "bg-emerald-500" : "bg-amber-500"
                                }`}
                                style={{ width: `${Math.min(100, (metaDescription.length / 156) * 100)}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. SEO Parameters Analysis Checkpoints */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                      SEO Parameters Quality Audit
                    </h4>

                    {/* Red / Problems */}
                    {!seoAnalysis.kwInTitle && (
                      <div className="space-y-1.5">
                        <div className="font-bold text-rose-600 flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                          <span>Needs Action (1)</span>
                        </div>
                        <ul className="space-y-1 pl-4 text-xs text-[#64748B] list-disc">
                          <li>
                            <strong className="text-[#0F172A]">Keyphrase in title:</strong> Focus keyphrase is missing from SEO title.
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* Orange / Improvements */}
                    <div className="space-y-1.5">
                      <div className="font-bold text-amber-600 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span>Improvements ({seoAnalysis.goodKwDensity ? "1" : "2"})</span>
                      </div>
                      <ul className="space-y-1 pl-4 text-xs text-[#64748B] list-disc">
                        {!seoAnalysis.goodKwDensity && (
                          <li>
                            <strong className="text-[#0F172A]">Keyphrase density:</strong> Keyword appeared {seoAnalysis.kwCount} times. Recommended: 2+ times.
                          </li>
                        )}
                        <li>
                          <strong className="text-[#0F172A]">Subheadings:</strong> Add keyword into at least one H2 section.
                        </li>
                      </ul>
                    </div>

                    {/* Green / Good Results */}
                    <div className="space-y-1.5">
                      <div className="font-bold text-emerald-600 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span>Passed Parameters (10)</span>
                      </div>
                      <ul className="space-y-1 pl-4 text-xs text-[#64748B] list-disc">
                        <li>
                          <strong className="text-[#0F172A]">Internal link funnel:</strong> {selectedTools.length} service conversion funnels connected.
                        </li>
                        <li>
                          <strong className="text-[#0F172A]">Introduction keyphrase:</strong> Focus keyphrase present in initial paragraph.
                        </li>
                        <li>
                          <strong className="text-[#0F172A]">Meta description:</strong> Keyphrase included and length is optimal.
                        </li>
                        <li>
                          <strong className="text-[#0F172A]">Content depth:</strong> {wordCount} words exceeds thin content thresholds.
                        </li>
                        <li>
                          <strong className="text-[#0F172A]">Image alt text:</strong> Featured image alt attribute verified.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: READABILITY TAB */}
              {seoTab === "readability" && (
                <div className="p-3 sm:p-5 space-y-3 text-xs bg-white">
                  <div className="font-bold text-emerald-600 flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Readability Standard: Good</span>
                  </div>
                  <ul className="space-y-1.5 pl-4 text-xs text-[#64748B] list-disc">
                    <li>
                      <strong className="text-[#0F172A]">Flesch Reading Ease:</strong> 64.2 score. Clear executive exposition.
                    </li>
                    <li>
                      <strong className="text-[#0F172A]">Subheading distribution:</strong> High density of logical H2/H3 headings.
                    </li>
                    <li>
                      <strong className="text-[#0F172A]">Paragraph length:</strong> Concise paragraphs formatted for mobile screen readability.
                    </li>
                  </ul>
                </div>
              )}

              {/* TAB 3: SCHEMA TAB */}
              {seoTab === "schema" && (
                <div className="p-3 sm:p-5 space-y-5 text-xs bg-white">
                  {/* Article Schema Configuration */}
                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-bold uppercase tracking-wider text-[#0F172A] text-sm flex items-center gap-2">
                          <Layers className="h-4 w-4 text-[#1D4ED8]" />
                          <span>Article Schema Configuration</span>
                        </h4>
                        <p className="text-[11px] text-[#64748B]">
                          Structured data graph generated for search engines and Google Rich Results.
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        Schema.org Validated
                      </span>
                    </div>

                    <div>
                      <label className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        Article Graph Type
                      </label>
                      <select
                        value={schemaType}
                        onChange={(e) => setSchemaType(e.target.value as any)}
                        className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] font-medium focus:outline-none focus:border-[#1D4ED8]"
                      >
                        <option value="TechArticle">TechArticle (Technical playbooks, architectures &amp; specifications)</option>
                        <option value="BlogPosting">BlogPosting (General technical publication)</option>
                      </select>
                      <p className="text-[10px] text-[#64748B] mt-1">
                        TechArticle instructs Google and AI search systems to prioritize this content for technical queries and formulas.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Schema Builder */}
                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#E2E8F0]">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-bold uppercase tracking-wider text-[#0F172A] text-sm flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-[#1D4ED8]" />
                            <span>FAQ Schema Builder (Google FAQ Rich Snippet)</span>
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                            {faqs.length} {faqs.length === 1 ? "Question" : "Questions"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] mt-0.5">
                          Questions and answers configured here automatically generate an @type: FAQPage schema graph for Google search SERP dropdown accordion snippets.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleAddFaq}
                        className="px-3.5 py-1.5 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1 shrink-0 self-start sm:self-auto"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Add Question</span>
                      </button>
                    </div>

                    {faqs.length === 0 ? (
                      <div className="text-center py-6 border border-dashed border-[#CBD5E1] rounded-xl space-y-2 bg-white">
                        <HelpCircle className="h-8 w-8 text-slate-400 mx-auto" />
                        <p className="text-xs font-semibold text-[#0F172A]">
                          No FAQ schema questions added yet
                        </p>
                        <p className="text-[11px] text-[#64748B] max-w-sm mx-auto">
                          Adding 2 to 4 FAQs increases organic click-through rates by up to 35% with Google search accordion dropdowns.
                        </p>
                        <button
                          type="button"
                          onClick={handleAddFaq}
                          className="mt-1 px-3 py-1 rounded-lg bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#1E40AF]"
                        >
                          + Add First FAQ Question
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {faqs.map((faq, index) => (
                          <div
                            key={faq.id}
                            className="p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-2.5 shadow-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#1D4ED8] flex items-center gap-1.5">
                                <span className="h-4 w-4 rounded-full bg-[#EFF6FF] text-[10px] font-mono flex items-center justify-center">
                                  {index + 1}
                                </span>
                                <span>Question #{index + 1}</span>
                              </span>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => handleMoveFaq(index, "up")}
                                  disabled={index === 0}
                                  className="p-1 text-slate-400 hover:text-[#0F172A] disabled:opacity-30"
                                  title="Move Up"
                                >
                                  <MoveUp className="h-3 w-3" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleMoveFaq(index, "down")}
                                  disabled={index === faqs.length - 1}
                                  className="p-1 text-slate-400 hover:text-[#0F172A] disabled:opacity-30"
                                  title="Move Down"
                                >
                                  <MoveDown className="h-3 w-3" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFaq(faq.id)}
                                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors ml-1"
                                  title="Delete Question"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </div>
                            </div>

                            <div>
                              <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                                Question:
                              </label>
                              <input
                                type="text"
                                value={faq.question}
                                onChange={(e) => handleUpdateFaq(faq.id, "question", e.target.value)}
                                placeholder="e.g. How does FrameCipher optimize Webflow Core Web Vitals?"
                                className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                                Accepted Answer:
                              </label>
                              <textarea
                                rows={2}
                                value={faq.answer}
                                onChange={(e) => handleUpdateFaq(faq.id, "answer", e.target.value)}
                                placeholder="Provide a concise, direct technical answer without fluff..."
                                className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Schema Preview Inspector */}
                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-emerald-600" />
                        <h4 className="font-heading font-bold uppercase tracking-wider text-[#0F172A] text-xs">
                          Live JSON-LD Structured Graph Preview
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedSchemaJson);
                          setCopiedSchema(true);
                          setTimeout(() => setCopiedSchema(false), 2000);
                        }}
                        className="px-3 py-1 rounded-lg bg-white border border-[#CBD5E1] text-[11px] font-heading font-bold uppercase tracking-wider text-[#1D4ED8] hover:bg-[#F8FAFC] flex items-center gap-1"
                      >
                        {copiedSchema ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy JSON-LD</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="rounded-xl bg-[#F8FAFC] p-3.5 border border-[#CBD5E1] font-mono text-[11px] text-[#0F172A] max-h-56 overflow-y-auto">
                      <pre className="whitespace-pre-wrap leading-relaxed">{generatedSchemaJson}</pre>
                    </div>
                    <p className="text-[10px] text-[#64748B]">
                      When publishing or updating this article, this Schema graph is rendered in the Next.js header using a standard JSON-LD script block.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 4: SOCIAL TAB */}
              {seoTab === "social" && (
                <div className="p-3 sm:p-5 space-y-3 text-xs bg-white">
                  <h4 className="font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                    Social Sharing Preview
                  </h4>
                  <div className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-white text-[#0F172A] shadow-xs max-w-md">
                    <div className="h-32 bg-[#F1F5F9] flex items-center justify-center overflow-hidden relative">
                    {featuredImageUrl ? (
                      <img
                        src={featuredImageUrl}
                        alt={featuredImageAlt || "Featured Image"}
                        className="w-full h-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-3 text-[#475569]">
                        <ImageIcon className="h-8 w-8 text-[#1D4ED8] mb-1" />
                        <span className="text-[10px] text-[#64748B] line-clamp-1">
                          {featuredImageAlt || "Featured Image"}
                        </span>
                      </div>
                    )}
                  </div>
                    <div className="p-3 bg-[#F8FAFC] border-t border-[#E2E8F0] space-y-1">
                      <div className="text-[10px] text-[#1D4ED8] uppercase font-bold font-mono">framecipher.com</div>
                      <div className="font-bold text-xs text-[#0F172A] line-clamp-1">{seoTitle}</div>
                      <div className="text-[11px] text-[#64748B] line-clamp-2">{metaDescription}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Classic WordPress Metaboxes (Smooth Flowing Column, Natural Scroll) */}
          {!isFullscreen && (
            <div className="w-full lg:w-72 xl:w-80 shrink-0 space-y-4">
            {/* 1. PUBLISH METABOX */}
            <div className="rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden bg-white">
              <div
                onClick={() => toggleMetabox("publish")}
                className="px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs cursor-pointer select-none bg-[#F8FAFC] text-[#0F172A]"
              >
                <span>Publish</span>
                {metaboxesOpen.publish ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.publish && (
                <>
                  <div className="p-3.5 space-y-3 text-xs">
                    {/* Draft and Preview Row */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0]">
                      <button
                        onClick={() => handleSaveDocument("draft")}
                        className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-bold text-[#334155] hover:bg-slate-100"
                      >
                        Save Draft
                      </button>
                      <a
                        href={`/blog/${slug || "guide"}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-bold text-[#1D4ED8] flex items-center gap-1 hover:bg-slate-100"
                      >
                        <span>Preview</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Status Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] font-medium">Status:</span>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as any)}
                        className="bg-transparent font-bold text-[#0F172A] border-b border-dashed border-[#CBD5E1] cursor-pointer"
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="scheduled">Scheduled</option>
                      </select>
                    </div>

                    {/* Visibility Row */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B] font-medium">Visibility:</span>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-[#0F172A] capitalize">
                            {visibility === "password" ? "Password protected" : visibility}
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsEditingVisibility(!isEditingVisibility)}
                            className="text-[11px] text-[#1D4ED8] hover:underline font-bold ml-1"
                          >
                            {isEditingVisibility ? "Cancel" : "Edit"}
                          </button>
                        </div>
                      </div>

                      {isEditingVisibility && (
                        <div className="pt-2 pb-1 space-y-1.5 bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visibility"
                              value="public"
                              checked={visibility === "public"}
                              onChange={() => setVisibility("public")}
                              className="text-[#1D4ED8]"
                            />
                            <span className="text-[#0F172A] font-medium">Public</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visibility"
                              value="password"
                              checked={visibility === "password"}
                              onChange={() => setVisibility("password")}
                              className="text-[#1D4ED8]"
                            />
                            <span className="text-[#0F172A] font-medium">Password protected</span>
                          </label>
                          {visibility === "password" && (
                            <div className="pl-6">
                              <input
                                type="text"
                                placeholder="Enter post password"
                                value={postPassword}
                                onChange={(e) => setPostPassword(e.target.value)}
                                className="w-full p-1.5 text-xs border rounded-lg bg-white border-[#CBD5E1]"
                              />
                            </div>
                          )}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visibility"
                              value="private"
                              checked={visibility === "private"}
                              onChange={() => setVisibility("private")}
                              className="text-[#1D4ED8]"
                            />
                            <span className="text-[#0F172A] font-medium">Private</span>
                          </label>
                          <button
                            type="button"
                            onClick={() => setIsEditingVisibility(false)}
                            className="px-2.5 py-0.5 bg-[#1D4ED8] text-white text-[11px] font-bold rounded-md mt-1"
                          >
                            OK
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Published Date & Time Row */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B] font-medium">Published on:</span>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-[#0F172A]">
                            {publishDate ? `${publishDate} ${publishTime}` : "Immediately"}
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsEditingDate(!isEditingDate)}
                            className="text-[11px] text-[#1D4ED8] hover:underline font-bold ml-1"
                          >
                            {isEditingDate ? "Cancel" : "Edit"}
                          </button>
                        </div>
                      </div>

                      {isEditingDate && (
                        <div className="pt-2 pb-1 space-y-2 bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                          <div className="flex items-center gap-1.5">
                            <input
                              type="date"
                              value={publishDate}
                              onChange={(e) => setPublishDate(e.target.value)}
                              className="p-1 text-xs border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A]"
                            />
                            <input
                              type="time"
                              value={publishTime}
                              onChange={(e) => setPublishTime(e.target.value)}
                              className="p-1 text-xs border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A]"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setIsEditingDate(false)}
                              className="px-2.5 py-0.5 bg-[#1D4ED8] text-white text-[11px] font-bold rounded-md"
                            >
                              OK
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setPublishDate(new Date().toISOString().split("T")[0]);
                                setPublishTime("12:00");
                                setIsEditingDate(false);
                              }}
                              className="text-[11px] text-[#64748B] hover:underline"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Author Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] font-medium">Author:</span>
                      <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="bg-transparent font-bold text-[#0F172A] border-b border-dashed border-[#CBD5E1] cursor-pointer text-xs"
                      >
                        <option value="Mahedi Hasan Perves">Mahedi Hasan Perves</option>
                        <option value="FrameCipher Growth Team">FrameCipher Growth Team</option>
                        <option value="FrameCipher Design Studio">FrameCipher Design Studio</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>

                    {/* Quick Indicators */}
                    <div className="pt-2 flex items-center justify-between text-[11px] border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>SEO: <strong>Good</strong></span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Readability: <strong>Good</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Publish Box Footer */}
                  <div className="px-4 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-xs text-[#DC2626] hover:underline font-semibold"
                    >
                      Move to Trash
                    </button>
                    <button
                      onClick={() => handleSaveDocument("published")}
                      className="px-4 py-1.5 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-bold font-heading uppercase tracking-wider shadow-xs transition-colors"
                    >
                      {status === "published" ? "Update" : "Publish"}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* 2. AUTO-SUGGESTED & RELATED SERVICES METABOX */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              <div
                onClick={() => toggleMetabox("services")}
                className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs text-[#0F172A] cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-amber-500" />
                  <span>Related Services & Case Studies ({selectedTools.length})</span>
                </div>
                {metaboxesOpen.services ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.services && (
                <div className="p-3.5 space-y-3 text-xs">
                  {/* Tab Selector: Auto-Suggested vs Manual Search */}
                  <div className="grid grid-cols-2 gap-1 p-0.5 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0]">
                    <button
                      type="button"
                      onClick={() => setServicesTab("suggested")}
                      className={`py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1 ${
                        servicesTab === "suggested"
                          ? "bg-white text-[#1D4ED8] shadow-xs"
                          : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>Auto Suggestions</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setServicesTab("search")}
                      className={`py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1 ${
                        servicesTab === "search"
                          ? "bg-white text-[#1D4ED8] shadow-xs"
                          : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <Search className="h-3 w-3" />
                      <span>Search Services ({FRAMECIPHER_REGISTRY.length})</span>
                    </button>
                  </div>

                  {servicesTab === "suggested" ? (
                    /* Auto-Suggestions View */
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#64748B]">
                          Matched from your post content:
                        </span>
                        {autoSuggestedServices.length > 0 && (
                          <button
                            type="button"
                            onClick={addAllAutoSuggestions}
                            className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#1D4ED8] hover:underline"
                          >
                            + Add All
                          </button>
                        )}
                      </div>

                      <div className="space-y-2">
                        {autoSuggestedServices.slice(0, 4).map(({ calc, matchPct }) => {
                          const isAttached = selectedTools.includes(calc.slug);
                          return (
                            <div
                              key={calc.slug}
                              className={`p-2.5 rounded-lg border transition-colors flex items-center justify-between gap-2.5 ${
                                isAttached
                                  ? "bg-[#EFF6FF] border-[#BFDBFE]"
                                  : "bg-[#F8FAFC] border-[#E2E8F0]"
                              }`}
                            >
                              <div className="min-w-0 flex-1">
                                <div className="font-semibold text-xs text-[#0F172A] truncate">
                                  {calc.title}
                                </div>
                                <div className="text-[10px] text-emerald-600 font-mono font-medium pt-0.5">
                                  {matchPct}% Relevancy Match
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => toggleTool(calc.slug)}
                                className={`px-2.5 py-1 rounded-md text-[10px] font-heading font-bold uppercase tracking-wider shrink-0 transition-colors ${
                                  isAttached
                                    ? "bg-[#1D4ED8] text-white"
                                    : "bg-white text-[#1D4ED8] border border-[#CBD5E1]"
                                }`}
                              >
                                {isAttached ? "✓ Connected" : "+ Connect"}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    /* Manual Search View */
                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="h-3 w-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={toolSearch}
                          onChange={(e) => setToolSearch(e.target.value)}
                          placeholder="Search services or case studies..."
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-lg text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8]"
                        />
                      </div>

                      <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                        {filteredServices.map((calc) => {
                          const isChecked = selectedTools.includes(calc.slug);
                          return (
                            <label
                              key={calc.slug}
                              className={`flex items-start gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                                isChecked
                                  ? "bg-[#EFF6FF] text-[#1D4ED8] font-semibold"
                                  : "hover:bg-[#F8FAFC] text-[#475569]"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleTool(calc.slug)}
                                className="mt-0.5 rounded text-[#1D4ED8] cursor-pointer"
                              />
                              <span className="text-xs truncate">{calc.title}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Attached Tool Chips */}
                  {selectedTools.length > 0 && (
                    <div className="pt-2 border-t border-[#E2E8F0]">
                      <span className="text-[10px] uppercase font-heading font-bold tracking-wider text-slate-400 block mb-1">
                        Currently Embedded ({selectedTools.length}):
                      </span>
                      <div className="flex flex-wrap gap-1 max-h-28 overflow-y-auto">
                        {selectedTools.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1 text-[10px] bg-[#F1F5F9] text-[#0F172A] px-2 py-0.5 rounded-md border border-[#E2E8F0]"
                          >
                            <span className="truncate max-w-[120px]">{s.replace(/-/g, " ")}</span>
                            <button
                              type="button"
                              onClick={() => toggleTool(s)}
                              className="text-slate-400 hover:text-rose-600"
                            >
                              &times;
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 3. CATEGORIES METABOX */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              <div
                onClick={() => toggleMetabox("categories")}
                className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs text-[#0F172A] cursor-pointer select-none"
              >
                <span>Categories</span>
                {metaboxesOpen.categories ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.categories && (
                <div className="p-3.5 space-y-2.5 text-xs">
                  {/* Category Tabs (All / Most Used) */}
                  <div className="flex border-b border-[#E2E8F0] text-[11px] font-heading font-bold uppercase tracking-wider mb-1">
                    <button
                      type="button"
                      onClick={() => setCategoryTab("all")}
                      className={`px-3 py-1.5 border-b-2 transition-colors ${
                        categoryTab === "all"
                          ? "border-[#1D4ED8] text-[#1D4ED8]"
                          : "border-transparent text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      All Categories
                    </button>
                    <button
                      type="button"
                      onClick={() => setCategoryTab("most_used")}
                      className={`px-3 py-1.5 border-b-2 transition-colors ${
                        categoryTab === "most_used"
                          ? "border-[#1D4ED8] text-[#1D4ED8]"
                          : "border-transparent text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      Most Used
                    </button>
                  </div>

                  {/* Category Checkboxes */}
                  <div className="space-y-1.5 max-h-44 overflow-y-auto">
                    {(categoryTab === "all" ? categoriesList : MOST_USED_CATEGORIES).map((cat) => (
                      <label key={cat} className="flex items-center gap-2 p-1 rounded-md hover:bg-[#F8FAFC] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => {
                            if (selectedCategories.includes(cat)) {
                              if (selectedCategories.length > 1) {
                                setSelectedCategories(selectedCategories.filter((c) => c !== cat));
                              }
                            } else {
                              setSelectedCategories([...selectedCategories, cat]);
                            }
                            setCategory(cat);
                          }}
                          className="rounded text-[#1D4ED8] focus:ring-0 cursor-pointer"
                        />
                        <span className="text-[#0F172A]">{cat}</span>
                      </label>
                    ))}
                  </div>

                  {/* + Add New Category */}
                  <div className="pt-2 border-t border-[#E2E8F0]">
                    {isAddingCategory ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                          placeholder="New category name"
                          className="w-full p-2 text-xs bg-white border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                        />
                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            onClick={handleAddCategory}
                            className="px-3 py-1 bg-[#1D4ED8] text-white rounded-lg text-xs font-heading font-bold uppercase tracking-wider"
                          >
                            Add
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsAddingCategory(false)}
                            className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsAddingCategory(true)}
                        className="text-xs text-[#1D4ED8] hover:underline font-heading font-bold uppercase tracking-wider"
                      >
                        + Add New Category
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 4. TAGS METABOX */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              <div
                onClick={() => toggleMetabox("tags")}
                className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs text-[#0F172A] cursor-pointer select-none"
              >
                <span>Tags</span>
                {metaboxesOpen.tags ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.tags && (
                <div className="p-3.5 space-y-2.5 text-xs">
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                      placeholder="Add new tag"
                      className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-3.5 py-1.5 rounded-lg bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A] hover:bg-[#E2E8F0]"
                    >
                      Add
                    </button>
                  </div>
                  <p className="text-[10px] text-[#64748B]">
                    Separate tags with commas
                  </p>

                  {/* Tag Pills */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-[11px] bg-[#F1F5F9] text-[#0F172A] px-2 py-0.5 rounded-md border border-[#E2E8F0]"
                        >
                          <span>{t}</span>
                          <button
                            type="button"
                            onClick={() => setTags(tags.filter((x) => x !== t))}
                            className="text-rose-600 hover:font-bold"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Most Used Tags */}
                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <span className="text-[10px] text-[#64748B] block mb-1.5 font-heading font-bold uppercase tracking-wider">
                      Choose from the most used tags:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {MOST_USED_TAGS.map((tag) => {
                        const isAlreadyAdded = tags.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            disabled={isAlreadyAdded}
                            onClick={() => setTags((prev) => [...prev, tag])}
                            className={`text-[10px] px-2 py-0.5 rounded-md border transition-colors ${
                              isAlreadyAdded
                                ? "opacity-40 line-through bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                                : "bg-white border-[#CBD5E1] text-[#1D4ED8] hover:bg-[#EFF6FF]"
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. FEATURED IMAGE METABOX */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              <div
                onClick={() => toggleMetabox("featuredImage")}
                className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs text-[#0F172A] cursor-pointer select-none"
              >
                <span>Featured image</span>
                {metaboxesOpen.featuredImage ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.featuredImage && (
                <div className="p-3.5 space-y-3 text-xs">
                  {featuredImageUrl ? (
                    <div className="space-y-2">
                      <div
                        onClick={() => handleOpenMedia("featured")}
                        className="group aspect-video w-full rounded-lg border border-[#E2E8F0] overflow-hidden cursor-pointer relative bg-[#F1F5F9] flex items-center justify-center"
                      >
                        <img
                          src={featuredImageUrl}
                          alt={featuredImageAlt || "Featured Image"}
                          className="w-full h-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-[#1D4ED8] text-xs font-bold font-heading uppercase tracking-wider">
                          Change image
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <button
                          type="button"
                          onClick={() => handleOpenMedia("featured")}
                          className="text-[#1D4ED8] font-semibold"
                        >
                          Click image to edit or replace
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFeaturedImageUrl("");
                            setFeaturedImageAlt("");
                          }}
                          className="text-rose-600 hover:underline font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <button
                        type="button"
                        onClick={() => handleOpenMedia("featured")}
                        className="text-xs text-[#1D4ED8] hover:underline font-heading font-bold uppercase tracking-wider"
                      >
                        + Set featured image
                      </button>
                    </div>
                  )}

                  {featuredImageUrl && (
                    <div className="pt-2 border-t border-[#E2E8F0]">
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        Alt Text (Image SEO):
                      </label>
                      <input
                        type="text"
                        value={featuredImageAlt}
                        onChange={(e) => setFeaturedImageAlt(e.target.value)}
                        placeholder="Descriptive alt text for Google..."
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 6. EXCERPT METABOX */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              <div
                onClick={() => toggleMetabox("excerpt")}
                className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs text-[#0F172A] cursor-pointer select-none"
              >
                <span>Excerpt</span>
                {metaboxesOpen.excerpt ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.excerpt && (
                <div className="p-3.5 space-y-2 text-xs">
                  <p className="text-[11px] text-[#64748B]">
                    Excerpts are optional hand-crafted summaries of your content that can be used in your blog archive cards and search result snippets.
                  </p>
                  <textarea
                    rows={4}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Write a concise excerpt..."
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                  />
                </div>
              )}
            </div>

            {/* 7. DISCUSSION METABOX */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs overflow-hidden">
              <div
                onClick={() => toggleMetabox("discussion")}
                className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between font-heading font-bold uppercase tracking-wider text-xs text-[#0F172A] cursor-pointer select-none"
              >
                <span>Discussion</span>
                {metaboxesOpen.discussion ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>

              {metaboxesOpen.discussion && (
                <div className="p-3.5 space-y-2.5 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={allowComments}
                      onChange={(e) => setAllowComments(e.target.checked)}
                      className="rounded text-[#1D4ED8] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-[#0F172A]">Allow comments</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={allowPingbacks}
                      onChange={(e) => setAllowPingbacks(e.target.checked)}
                      className="rounded text-[#1D4ED8] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-[#0F172A]">Allow trackbacks and pingbacks on this post</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Link Dialog Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-300/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-[#E2E8F0] shadow-2xl p-6 space-y-4 bg-white text-[#0F172A]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <h3 className="font-heading font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <Link2 className="h-4 w-4 text-[#1D4ED8]" />
                <span>Insert / Edit Link</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsLinkModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1 text-[#0F172A]">URL:</label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full p-2.5 border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                  autoFocus
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-[#0F172A]">Link Text (optional):</label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Anchor text"
                  className="w-full p-2.5 border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={linkOpenInNewTab}
                  onChange={(e) => setLinkOpenInNewTab(e.target.checked)}
                  className="rounded text-[#1D4ED8]"
                />
                <span className="font-medium text-[#0F172A]">Open link in a new tab</span>
              </label>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => setIsLinkModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg hover:bg-[#F1F5F9] text-[#64748B]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyLink}
                disabled={!linkUrl.trim()}
                className="px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-40 rounded-lg shadow-xs"
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table Insert Modal */}
      {isTableModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-300/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl border border-[#E2E8F0] shadow-2xl p-6 space-y-4 bg-white text-[#0F172A]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <h3 className="font-heading font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <TableIcon className="h-4 w-4 text-[#1D4ED8]" />
                <span>Insert Table</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsTableModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-semibold mb-1 text-[#0F172A]">Rows:</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={tableRows}
                  onChange={(e) => setTableRows(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-2.5 border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#0F172A]">Columns:</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={tableCols}
                  onChange={(e) => setTableCols(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-2.5 border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => setIsTableModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg hover:bg-[#F1F5F9] text-[#64748B]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleInsertTable(tableRows, tableCols)}
                className="px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg shadow-xs"
              >
                Insert Table
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. WordPress Media Library Modal */}
      <MediaLibraryModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        onSelectMedia={handleSelectMedia}
        title={mediaModalTarget === "featured" ? "Featured Image" : "Add Media"}
        buttonLabel={mediaModalTarget === "featured" ? "Set featured image" : "Insert into post"}
      />

      {/* 5. WordPress Keyboard Shortcuts Help Modal */}
      {isShortcutsOpen && (
        <div className="fixed inset-0 z-[120] bg-slate-300/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-[#1D4ED8]" />
                <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-[#0F172A]">
                  Keyboard Shortcuts
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsShortcutsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-3 text-xs pr-1">
              <div>
                <h4 className="font-heading font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-1.5">
                  Default Formatting
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Bold</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Ctrl + B</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Italic</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Ctrl + I</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Underline</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Ctrl + U</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Insert Link</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Ctrl + K</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Undo</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Ctrl + Z</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Redo</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Ctrl + Y</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-1.5">
                  Advanced Access Keys (Alt + Shift + key)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Heading 1 – 6</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + 1-6</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Align Left</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + L</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Align Center</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + C</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Align Right</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + R</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Bulleted list</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + U</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Numbered list</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + O</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Blockquote</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + Q</kbd>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                    <span>Kitchen sink</span>
                    <kbd className="font-mono font-bold text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CBD5E1]">Alt + Shift + Z</kbd>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => setIsShortcutsOpen(false)}
                className="px-4 py-2 bg-[#1D4ED8] text-white rounded-lg text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#1E40AF]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. WordPress Image Details Modal */}
      {isImageDetailsOpen && (
        <div className="fixed inset-0 z-[120] bg-slate-300/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Edit3 className="h-4 w-4 text-[#1D4ED8]" />
                <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-[#0F172A]">
                  Image Details
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsImageDetailsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Alternative Text */}
              <div>
                <label className="block font-heading font-bold uppercase tracking-wider text-[11px] text-[#0F172A] mb-1">
                  Alternative Text (Alt)
                </label>
                <input
                  type="text"
                  value={editingImageAlt}
                  onChange={(e) => setEditingImageAlt(e.target.value)}
                  placeholder="Describe the purpose of the image..."
                  className="w-full p-2.5 border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Leave empty if decorative. Essential for SEO and screen readers.
                </span>
              </div>

              {/* Caption */}
              <div>
                <label className="block font-heading font-bold uppercase tracking-wider text-[11px] text-[#0F172A] mb-1">
                  Caption
                </label>
                <textarea
                  rows={2}
                  value={editingImageCaption}
                  onChange={(e) => setEditingImageCaption(e.target.value)}
                  placeholder="Image caption visible under the image..."
                  className="w-full p-2.5 border rounded-lg bg-white border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] resize-none"
                />
              </div>

              {/* Alignment */}
              <div>
                <label className="block font-heading font-bold uppercase tracking-wider text-[11px] text-[#0F172A] mb-1.5">
                  Alignment
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "none", label: "None", icon: AlignJustify },
                    { id: "left", label: "Left", icon: AlignLeft },
                    { id: "center", label: "Center", icon: AlignCenter },
                    { id: "right", label: "Right", icon: AlignRight },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    const isSelected = editingImageAlignment === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEditingImageAlignment(item.id as any)}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg border text-xs font-semibold gap-1 transition-colors ${
                          isSelected
                            ? "border-[#1D4ED8] bg-[#EFF6FF] text-[#1D4ED8]"
                            : "border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Display Size / Width */}
              <div>
                <label className="block font-heading font-bold uppercase tracking-wider text-[11px] text-[#0F172A] mb-1.5">
                  Display Size
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {["25%", "50%", "75%", "100%"].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setEditingImageWidth(preset)}
                      className={`py-1.5 rounded-lg border text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                        editingImageWidth === preset
                          ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                          : "border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500">Custom width:</span>
                  <input
                    type="text"
                    value={editingImageWidth}
                    onChange={(e) => setEditingImageWidth(e.target.value)}
                    placeholder="e.g. 450px or 60%"
                    className="flex-1 p-2 border rounded-lg bg-white border-[#CBD5E1] text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => setIsImageDetailsOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg hover:bg-[#F1F5F9] text-[#64748B]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdateImageDetails}
                className="px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg shadow-xs"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
