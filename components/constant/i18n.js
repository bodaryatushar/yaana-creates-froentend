import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    'topbar_title': 'Welcome to Our store Yaana Creats',
                    'call_us': 'Call Us',
                    'Home': 'Home',
                    'features': 'features',
                    'new': 'new',
                    "Blogs":"Blogs",
                    'blog_left_sidebar': 'left sidebar',
                    'blog_right_sidebar': 'right sidebar',
                    'blog_detail': 'blog detail',
                    'category_left_sidebar': 'left sidebar',
                    'category_right_sidebar': 'right sidebar',
                    'category_no_sidebar': 'no sidebar',
                    'category_metro': 'metro',
                    'category_full_width': 'full width',
                    'Products': 'Products',
                    'left_sidebar': 'left sidebar',
                    'right_sidebar': 'right sidebar',
                    'no_sidebar': 'no sidebar',
                    'three_col_thumbnail_left': 'Thumbnail left',
                    'three_col_thumbnail_right': 'Thumbnail right',
                    'thumbnail_below': 'thumbnail below',
                    'accordian_details': 'accordian details',
                    'thumbnail_left': 'image left',
                    'thumbnail_right': 'image right',
                    'vertical_tab': 'vertical tab',
                    'Pages': 'Pages',
                    'about_us': 'about us',
                    'lookbook': 'lookbook',
                    'login': 'login',
                    'register': 'register',
                    'logout': 'Logout',
                    'search': 'search',
                    'wishlist': 'wishlist',
                    'cart': 'cart',
                    'collection': 'collection',
                    'forget_password': 'forget password',
                    'contact': 'contact',
                    'checkout': 'checkout',
                    'compare': 'compare',
                    'order_success': 'order_success',
                    'dashboard': 'Dashboard',
                    'FAQ': 'FAQ',
                    'Shop': 'Shop',
                    'mens_fashion': 'mens fashion',
                    'top': 'top',
                    'bottom': 'bottom',
                    'ethic_wear': 'ethic wear',
                    'sports_wear': 'sports wear',
                    'shirts': 'shirts',
                    'women_fashion': 'womens fashion',
                    'dresses': 'dresses',
                    'skirts': 'skirts',
                    'westarn_wear': 'westarn wear',
                    'ethnic_wear': 'ethnic wear',
                    'sport_wear': 'aport wear',
                    'bottom_wear': 'bottom wear',
                    'kids_fashion': 'kidss fashion',
                    'accessories': 'Accessories',
                    'fashion_jewellery': 'Fashion Jewellery',
                    'caps_and_hats': 'caps and hats',
                    'precious_jewellery': 'precious jewellery',
                    'necklaces': 'necklaces',
                    'earrings': 'earrings',
                    'rings_wrist_wear': 'rings & wrist wear',
                    'men_accessories': 'mens accessories',
                    'ties': 'ties',
                    'cufflinks': 'cufflinks',
                    'pockets_squares': 'pockets squares',
                    'helmets': 'helmets',
                    'scarves': 'scarves',
                    'phone_cases': 'phone cases',
                    'my_account': 'My Account',
                    'fashion': 'Fashion',
                    'beauty': 'Beauty',
                    'electronic': 'Electronic',
                    'furniture': 'Furniture',
                    'kids': 'Kids',
                    'pets': 'Pets',
                    'vegetables': 'Vegetables',
                    'watch': 'Watch',
                    'theme_elements': 'theme elements',
                    'element_title': 'element title',
                    'collection_banner': 'collection banner',
                    'home_slider': 'home slider',
                    'category': 'category',
                    'service': 'service',
                    'image_size_ratio': 'image size ratio',
                    'product_elements': 'product elements',
                    'product_box': 'product box',
                    'product_slider': 'product slider',
                    'no_slider': 'no slider',
                    'multi_slider': 'multi slider',
                    'tab': 'tab',
                    'email_template': 'email template',
                    'portfolio': 'portfolio',
                    'portfolio_grid_2': 'portfolio grid 2',
                    'portfolio_grid_3': 'portfolio grid 3',
                    'portfolio_grid_4': 'portfolio grid 4',
                    'portfolio_masonary_2': 'masonary 2',
                    'portfolio_masonary_3': 'masonary 3',
                    'portfolio_masonary_4': 'masonary 4',
                    'portfolio_masonary_full': 'masonary full width',
                }
            },
            fn: {
                translations: {
                    'topbar_title': 'Bienvenue dans notre magasin {theme_name}',
                    'call_us': 'Appelez nous',
                    'Home': 'maison',
                    'features': 'fonctionnalités',
                    'new': 'Nouveau',
                    'blog': 'bloguer',
                    'blog_left_sidebar': 'barre latérale gauche',
                    'blog_right_sidebar': 'barre latérale droite',
                    'blog_detail': 'détail du blog',
                    'category_left_sidebar': 'barre latérale gauche',
                    'category_right_sidebar': 'barre latérale droite',
                    'category_no_sidebar': 'sans encadré',
                    'category_metro': 'métro',
                    'category_full_width': 'pleine largeur',
                    'products': 'des produits',
                    'left_sidebar': 'Barre latérale degauche',
                    'right_sidebar': 'Barre latérale droite',
                    'no_sidebar': 'pas de barre latérale',
                    'three_col_thumbnail_left': '3 vignettes gauche',
                    'three_col_thumbnail_right': '3 vignette droite',
                    'thumbnail_below': 'vignette ci_dessous',
                    'accordian_details': 'détails accordéon',
                    'thumbnail_left': 'vignette à gauche',
                    'thumbnail_right': 'vignette droite',
                    'vertical_tab': 'onglet vertical',
                    'Pages': 'des pages',
                    'about_us': 'à propos de nous',
                    'lookbook': 'lookbook',
                    'login': 'sidentifier',
                    'register': 'registre',
                    'logout': 'Connectez _ Out',
                    'search': 'chercher',
                    'wishlist': 'liste de souhaits',
                    'cart': 'Chariot',
                    'collection': 'collection',
                    'forget_password': 'mot de passe oublié',
                    'contact': 'contact',
                    'checkout': 'check_out',
                    'compare': 'comparer',
                    'order_success': 'succès de la',
                    'dashboard': 'Tableau de bord',
                    'FAQ': 'FAQ',
                    'Shop': 'Boutique',
                    'mens_fashion': 'la mode masculine',
                    'sports_wear': 'vêtements de sport',
                    'top': 'Haut',
                    'bottom': 'bas',
                    'ethic_wear': 'usure éthique',
                    'shirts': 'chemises',
                    'women_fashion': 'la mode des femmes',
                    'dresses': 'les robes',
                    'skirts': 'jupes',
                    'westarn_wear': 'usure occidentale',
                    'ethnic_wear': 'tenue éthnique',
                    'sport_wear': 'vêtement de sport',
                    'bottom_wear': 'usure du bas',
                    'kids_fashion': 'mode pour enfants',
                    'accessories': 'Accessories',
                    'fashion_jewellery': 'bijoux fantaisie',
                    'caps_and_hats': 'casquettes et chapeaux',
                    'precious_jewellery': 'bijoux précieux',
                    'necklaces': 'colliers',
                    'earrings': 'des boucles doreilles',
                    'rings_wrist_wear': 'bagues et vêtements',
                    'men_accessories': 'accessoires pour hommes',
                    'ties': 'liens',
                    'cufflinks': 'boutons de manchette',
                    'pockets_squares': 'poches à carreaux',
                    'helmets': 'casques',
                    'scarves': 'écharpes',
                    'phone_cases': 'Coque de téléphone',
                    'my_account': 'Mon compte',
                    'fashion': 'Mode',
                    'beauty': 'Beauté',
                    'electronic': 'Électronique',
                    'furniture': 'Meubles',
                    'kids': 'des gamins',
                    'pets': 'animaux domestiques',
                    'vegetables': 'Des légumes',
                    'watch': 'Regarder',
                    'theme_elements': 'éléments de thème',
                    'element_title': 'titre de l\'élément',
                    'collection_banner': 'bannière de collection',
                    'home_slider': 'home curseur',
                    'category': 'Catégorie',
                    'service': 'un service',
                    'image_size_ratio': 'rapport de taille d\'image',
                    'product_elements': 'éléments de produit',
                    'product_box': 'boîte de produit',
                    'product_slider': 'curseur de produit',
                    'no_slider': 'pas de curseur',
                    'multi_slider': 'curseur multiple',
                    'tab': 'languette',
                    'email_template': 'modèle de courrier électronique',
                    'portfolio': 'portefeuille',
                    'portfolio_grid_2': 'portefeuille grille 2',
                    'portfolio_grid_3': 'portefeuille grille 3',
                    'portfolio_grid_4': 'portefeuille grille 4',
                    'portfolio_masonary_2': 'maçonnerie 2',
                    'portfolio_masonary_3': 'maçonnerie 3',
                    'portfolio_masonary_4': 'maçonnerie 4',
                    'portfolio_masonary_full': 'maçonnerie pleine largeur',
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18next;
