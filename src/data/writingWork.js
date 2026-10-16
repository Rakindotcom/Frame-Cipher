/**
 * Canonical Writing Portfolio Database for Frame Cipher.
 *
 * Real delivered samples from two client archives:
 *  - Video script samples (Google Sheets index)      -> videoScriptSamples
 *  - Content writing samples (Perves Drive archive)  -> contentWritingSamples
 *
 * Every entry links to a publicly viewable Google Doc so visitors can read the
 * actual work rather than a marketing summary.
 */

const doc = (id) => `https://docs.google.com/document/d/${id}/edit`

export const WRITING_ARCHIVE = {
  videoScripts:
    'https://docs.google.com/spreadsheets/d/1f9-75aR1mWrcEVkKP5CU7JtdQiEbAsIKRlXdybyU5Y4/edit',
  contentWriting:
    'https://drive.google.com/drive/folders/16GbMEgPjttm-DMNeI55fINNl-kYjIdDP',
}

/**
 * Video / motion / ad script samples.
 * category: Product Video | Brand Film | Motion & Ads | Documentary & YouTube |
 *           Shorts | Voiceover | Real Estate
 */
export const videoScriptSamples = [
  {
    title: 'SEO Video Gen + Ecommerce Script',
    category: 'Motion & Ads',
    client: 'E-commerce growth campaign',
    url: doc('1hAILmm8u80BVCFjIcHIsL_JY4BTUF81_7qor0fEntrk'),
  },
  {
    title: 'Facebook Ads & SEO Motion Video Script',
    category: 'Motion & Ads',
    client: 'Paid social + search',
    url: doc('17sRPCBJNnnHdVF769XLJVAMcTeP45TXPU4zK1Biwt2Y'),
  },
  {
    title: 'Motion Video Scripts',
    category: 'Motion & Ads',
    client: 'Website & editing service',
    url: doc('1d24Y3r-W_KiKBnXEAcFNF49pNJiy_jRngP_Q64qH4A0'),
  },
  {
    title: 'Motion Video Script — Video Editing Service',
    category: 'Motion & Ads',
    client: 'Video editing service',
    url: doc('1zQEuORlBC3IbScgP0GsqqmcHLq--E8955Fw9-f5OJY8'),
  },
  {
    title: 'Video Editing Motion Graphics Script',
    category: 'Motion & Ads',
    client: 'Motion graphics service',
    url: doc('1GEXXzZ2mYgwLr3fWcHc0pP4v3W_UFXytRYvA2GSefD4'),
  },
  {
    title: 'Medivila Product Video Script 1',
    category: 'Product Video',
    client: 'Medivila',
    url: doc('1WwB-OxKPQEunObmqZsLrqZDIvSQg1Fp9oV76wofwjxc'),
  },
  {
    title: 'Medivila Product Video Script 2',
    category: 'Product Video',
    client: 'Medivila',
    url: doc('1BJZvNkn8G0TF62PpJBXna4UhI1rlO9M6_SxUXFwVCf8'),
  },
  {
    title: 'Jarixo Massager Video Script',
    category: 'Product Video',
    client: 'Jarixo',
    url: doc('174QWhk13sDn1qctBZU7PEcyoy3csk-EnJsIu2gWGR2U'),
  },
  {
    title: "Jarixo Massager's Video Script 2",
    category: 'Product Video',
    client: 'Jarixo',
    url: doc('194JQ7r5KV975dI-xBzcuPYZTc1Z_J9MHUpU1aKoXQBQ'),
  },
  {
    title: 'Baby Bouncer Video Script',
    category: 'Product Video',
    client: 'Baby & kids retail',
    url: doc('1Je89AlZrdoyiQgNcdG5u3bf_85X8yfc4cwT4sRbuGus'),
  },
  {
    title: 'Baby Potty Seat Video Script',
    category: 'Product Video',
    client: 'Baby & kids retail',
    url: doc('1jAT9iNbBgfl0hHe5ASVjGqj1Gt_yASvgCUxG3kIT9EY'),
  },
  {
    title: 'Massage Gun & Deep Tissue Massage Gun Video Script',
    category: 'Product Video',
    client: 'Wellness product',
    url: doc('1d_rNgM6Cr6j-WmWYOciuRfAtFjY59NYgb0vASw77QRA'),
  },
  {
    title: 'Montessori Educational Target Sports Video Script',
    category: 'Product Video',
    client: 'Educational toys',
    url: doc('1dXJwS1_rtI16mkd-ux70NECj7D57dKXm8TbRoCPbk44'),
  },
  {
    title: 'Tent Play House Small & Large Video Script',
    category: 'Product Video',
    client: 'Kids toys',
    url: doc('1sbeMqw3QCj5ZUlMGYgfU1kcIg_AnV4yQOWPlhsvRYUo'),
  },
  {
    title: 'নড়াইল সুইটস — Video Script (1 min)',
    category: 'Brand Film',
    client: 'নড়াইল সুইটস',
    url: doc('15vVzF0XjSdvjqP6G81TSzEqg-FJzEDem52NWGEQRK9k'),
  },
  {
    title: 'Happy Tours & Travels Video Script',
    category: 'Brand Film',
    client: 'Happy Tours & Travels',
    url: doc('1A66MXAp8SFvNd-UkyUYHvxGEAHMwq0JurS4akX7YDmk'),
  },
  {
    title: 'Serbia Campaign Video Script — Happy Tours & Travels',
    category: 'Brand Film',
    client: 'Happy Tours & Travels',
    url: doc('1DgilUqCPwWogQT7xv-AYT84CcMldos136rwu1KTlFYE'),
  },
  {
    title: 'Health Visa Video Script — Green Way Visa & Travels',
    category: 'Brand Film',
    client: 'Green Way Visa & Travels',
    url: doc('1K5wchP1liElzr-vfQgrzx93tiIe7YBqNgehVX0vg-G4'),
  },
  {
    title: 'Local Boys Video Script',
    category: 'Brand Film',
    client: 'Local Boys',
    url: doc('1Uio4lS9YY5ZGIg8BHrglsmAHAaA1wUFXe8YLKIQDdio'),
  },
  {
    title: 'RMS Direction Documentary YouTube Video Scripts',
    category: 'Documentary & YouTube',
    client: 'RMS Direction',
    url: doc('1vc2W12_42wOMJGDqrKN-2ca-u8bB-_CCqCxFjF3EREc'),
  },
  {
    title: 'RMS Direction Shorts Video Scripts',
    category: 'Shorts',
    client: 'RMS Direction',
    url: doc('1XO6MAcSQRcz4Ni-7q48wwY5Mt2jWTgRfHnMhTtfRSA8'),
  },
  {
    title: 'Server Side Tracking Explainer Video Script',
    category: 'Motion & Ads',
    client: 'Analytics / tracking setup',
    url: doc('1WH-MIguzsu-QF7a7yBxS4y3djZMFo-gZ1GzkNXDT0TY'),
  },
  {
    title: 'Property Video Script — Elegant Properties',
    category: 'Real Estate',
    client: 'Elegant Properties',
    url: doc('1VwmM6SnQzYpHdGpEBaEEYd5fwPsIgTMpBBdOkQ4GqYA'),
  },
  {
    title: 'Property Video Script — Elegant Properties (Part 2)',
    category: 'Real Estate',
    client: 'Elegant Properties',
    url: doc('1EmMpMISPxf4emJr4LjgOVQpsd4_5fdOeF5Ks-PeyRhM'),
  },
  {
    title: 'Voice-Over Script — Graphic Design Promo',
    category: 'Voiceover',
    client: 'Riha WebTech',
    url: doc('1wdkffbC0LThxsJJhqiEyPNJuoaPer3b5IIs7iO1iYTQ'),
  },
]

/**
 * Content writing samples (blogs, website copy, product copy, ad/social copy,
 * landing pages and content strategy).
 * category: Blog & Guides | Service & Website Content | Product & E-commerce Copy |
 *           Ad & Social Copy | Landing Page Copy | Content Strategy
 */
export const contentWritingSamples = [
  // Blog & guides
  {
    title: 'How to Remove Wrinkles from Clothes in Photoshop: Step-by-Step Guide',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('1vUoiQU41y_J9A0xL0VCfj0-ZMJArDhtTtxFlMeVT864'),
  },
  {
    title: 'Best Background Colors for E-commerce Product Photos',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('1OvXvzUQC0E2-a8NyvIDgq6r9Byus7dyIyPCqQ4vwr9k'),
  },
  {
    title: 'How to Fix Blurry and Out-of-Focus Photos in Photoshop',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('17wFrkuXeiva2jEkGtAwGJIf8R1wzeileGKPwdYImJQs'),
  },
  {
    title: 'Color Correction and Color Grading in Photoshop: Complete Guide',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('1eI1MvzqXL0HI-DGFR7wesG3aUQC6Te288VCA0q45aFE'),
  },
  {
    title: 'How to Replace Skies in Real Estate Photos',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('1mbkPD5vS6IXc__DCNzKUZ0OK6_6bwjEKDDkFvlc20yA'),
  },
  {
    title: 'Top 10 Newborn Retouching Mistakes & How to Avoid Them',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('1bNHVA_OvXtyKlAKN5DU4c1Ifg2c5aiweoBzN68YgDcs'),
  },
  {
    title: 'Visual Search Engine Optimization: E-commerce Visual SEO Guide',
    category: 'Blog & Guides',
    client: 'PixcRetouch',
    url: doc('1z_2trPSYtoXyjHYApDRD6R_LERRLRbbotPbujA0f-Es'),
  },
  {
    title: 'Best Email Hosting for Small Business',
    category: 'Blog & Guides',
    client: 'Riha WebTech',
    url: doc('1V-ON_uSpS7c_191C3rDlaKoXt27lu5RagUgYkM6G3-M'),
  },
  {
    title: 'E-E-A-T vs. LLMs: The New Battle for Authority in the Age of AI',
    category: 'Blog & Guides',
    client: 'Riha WebTech',
    url: doc('1BoyjwdZDrA2ItXO8uL9YGUmbZEfdr6kTQhKSN4CMcCI'),
  },
  {
    title: 'How to Add Schema Markup to WordPress Without a Plugin',
    category: 'Blog & Guides',
    client: 'Riha WebTech',
    url: doc('1_aQaX2HX-HInA7T5tDi5y5X1ACJwO9RKubYBUovPw3g'),
  },
  {
    title: 'How to Install WordPress on Hostinger: Step-by-Step Guide',
    category: 'Blog & Guides',
    client: 'Riha WebTech',
    url: doc('1v8MvrwxtEyJsPmKIoV-zTyD2cv2BGy6FlXJ8RQ5_l2I'),
  },

  // Service & website content
  {
    title: 'PixcRetouch Home Page Copy',
    category: 'Service & Website Content',
    client: 'PixcRetouch',
    url: doc('1142tV082xF51uCmyRDjKyaBRjM_WkAIMwo1h9GE8xcI'),
  },
  {
    title: 'On-Page SEO Service Content',
    category: 'Service & Website Content',
    client: 'Riha WebTech',
    url: doc('1KGoSD9Cj7HAHgzvnUjccBAcf6U2VVWKH6UwhDkj93KA'),
  },
  {
    title: 'Smart Phone Repair Service Page Copy',
    category: 'Service & Website Content',
    client: 'Phone Fashion Fix',
    url: doc('1ixIBa_XnO67CIaS_gUpqM9NjeaKQVjED0EfIkN36n3U'),
  },

  // Product & e-commerce copy
  {
    title: 'Ecommerce Photo Editing Services — Product Copy',
    category: 'Product & E-commerce Copy',
    client: 'PixcRetouch',
    url: doc('10LmByxDD4ph-R-dcW_cKORbh55_GglBGGYpKLzEw1_w'),
  },
  {
    title: 'AI Photo Re-editing Services — Product Copy',
    category: 'Product & E-commerce Copy',
    client: 'PixcRetouch',
    url: doc('1xE1CNPuCZ7xXdpnUoK1RuRnXWWrusex1iG6NE3cb6fM'),
  },
  {
    title: 'Underwear Photo Editing Service Copy',
    category: 'Product & E-commerce Copy',
    client: 'PixcRetouch',
    url: doc('1MkevvvKh0WzZibxoP1WhYncMRrq60RAUAbzH5sK3NXw'),
  },
  {
    title: 'Hat & Bag Photo Editing Service Copy',
    category: 'Product & E-commerce Copy',
    client: 'PixcRetouch',
    url: doc('1Lnhfje9RvqGjnypvp0n_uvOKYSQ6AGfflCu_IZHTqfI'),
  },
  {
    title: 'Eyeglass Photo Editing Service Copy',
    category: 'Product & E-commerce Copy',
    client: 'PixcRetouch',
    url: doc('1J1TrKPmKq0lUkzwRqc-yRROFH86BEYAMG4GcuAuQGm0'),
  },
  {
    title: 'What Is Product Photography — Category Page',
    category: 'Product & E-commerce Copy',
    client: 'PixcRetouch',
    url: doc('1j-QaaaoTILP0mHbZ3pIMGuAZFU2gc0UIxL54kz1rznM'),
  },

  // Ad & social copy
  {
    title: 'Facebook Ads Growth Strategy',
    category: 'Ad & Social Copy',
    client: 'Riha WebTech',
    url: doc('1wL5X3gM0hIH1wf2edlyfqDF2uI6Qbzi_iZZ0NdCd6cM'),
  },
  {
    title: 'Ramadan Campaign Facebook Ads Scripts',
    category: 'Ad & Social Copy',
    client: 'Riha WebTech',
    url: doc('1kq9DyR8_M6FialdGeyK7c-1n-_h4orj2vSYyL9BCUnE'),
  },
  {
    title: 'TikTok Ads Copy',
    category: 'Ad & Social Copy',
    client: 'Riha WebTech',
    url: doc('1ql3N7R6VcYHoFXuzF3xelxg31i5MPJWIQ7i6ZAIr7Ns'),
  },
  {
    title: 'Facebook Ads Copy',
    category: 'Ad & Social Copy',
    client: 'Phone Fashion Fix',
    url: doc('163tIPTreZ0TgXBp7lslFLGlxa97RVcHrsW0AKLhPwY8'),
  },

  // Landing page copy
  {
    title: 'Landing Page Design Scripts',
    category: 'Landing Page Copy',
    client: 'Riha WebTech',
    url: doc('1cjsRl_Zma25NioBGKl3II-z06phJsjfQTl_oA_Olruw'),
  },
  {
    title: 'Jarixo Product Page Layout Guide',
    category: 'Landing Page Copy',
    client: 'Jarixo',
    url: doc('119EsHkJTCmfZYgzJ0AfP-hO3Yv5R5NxfAbQ1QueA3qw'),
  },
  {
    title: 'Product Page SEO & CRO Copy',
    category: 'Landing Page Copy',
    client: 'Jarixo',
    url: doc('1asjcCffIUBxxwMqDI6zNDDAT6EbdEZ_HkSM1C90Wkrk'),
  },

  // Content strategy
  {
    title: 'Monthly Blog Content Plan',
    category: 'Content Strategy',
    client: 'PixcRetouch',
    url: doc('1TQc11SAe6YLigtVUqH-_VIp-wPdjAgyXzPFx73a1rls'),
  },
]

export function filterWritingSamples(samples, categories = null) {
  if (!categories || categories.length === 0) return samples
  return samples.filter((sample) => categories.includes(sample.category))
}
