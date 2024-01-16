-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 14 oct. 2023 à 13:44
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cosmetic_shop`
--

-- --------------------------------------------------------

--
-- Structure de la table `banners`
--

CREATE TABLE `banners` (
  `banner_id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `button` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `banners`
--

INSERT INTO `banners` (`banner_id`, `created_at`, `button`, `description`, `image`, `link`, `src`, `title`) VALUES
(2, '2023-10-13 12:05:01.000000', 'Découvrez maintenant', 'Révélez votre beauté authentique', '3e520036-f4ae-4441-8c8a-e1da5ee68dd0_bg1.jpg', 'user/home', 'C:\\fakepath\\bg1.jpg', 'Éclat Naturel'),
(3, '2023-10-13 12:07:25.000000', 'Découvrez maintenant', 'Pour un look sophistiqué', '60b02e77-f92e-4a9a-8761-eab35fcee973_bg2.png', 'user/home', 'C:\\fakepath\\bg2.png', 'Élégance Instantanée'),
(5, '2023-10-13 12:14:25.000000', 'Découvrez maintenant', 'Chouchoutez votre peau délicatement', '0dbb9292-e5d8-4add-9300-da07a7661f1e_bg3.jpg', '/user/home', 'C:\\fakepath\\bg3.jpg', 'Soin Exquis');

-- --------------------------------------------------------

--
-- Structure de la table `blogs`
--

CREATE TABLE `blogs` (
  `blog_id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `blogs`
--

INSERT INTO `blogs` (`blog_id`, `created_at`, `image`, `src`, `text`, `title`) VALUES
(2, '2023-10-14 02:01:58.000000', '175701d1-4d64-47d2-951f-e74364e51452_blog-3.png', NULL, '. Que signifie le fait que Novage+ bioactive les soins de la peau ??\nNOVAGE+ est une ligne de soins bioactivants qui utilise des technologies de pointe d\'origine naturelle. Ces technologies sont conçues pour réactiver les fonctions biologiques de la peau et l\'aider à se réparer, à se réinitialiser et à se renforcer. Cette approche unique permet d\'obtenir rapidement des résultats exceptionnels, cliniquement prouvés, tout en respectant la peau. Les soins bioactivants offrent les mêmes performances que des ingrédients actifs tels que le rétinol, le niacinamide, la vitamine C et l\'acide kojique, mais avec un impact plus doux sur la peau.\n\n2. 2. A partir de quel âge puis-je utiliser Novage+ ? Que dois-je utiliser si je n\'ai que les premiers signes de vieillissement ??\nNovage+ convient à tous les âges, car il s\'adresse à différents problèmes de peau et ne se concentre pas uniquement sur l\'âge. Quel que soit votre âge, vous pouvez choisir la routine Novage+ qui répond le mieux à vos besoins. Si vous ressentez les premiers signes du vieillissement, tels que les ridules ou la perte de fermeté, la ROUTINE WRINKLE SMOOTH NOVAGE+ est un excellent point de départ. Elle permet non seulement de réduire les rides, mais aussi de prévenir leur apparition.\n\n3.  Comment savoir quels produits Novage+ conviennent le mieux à ma peau ?\nLes soins Novage+ sont adaptés aux préoccupations spécifiques de la peau plutôt qu\'à l\'âge. Voici une analyse qui vous aidera à choisir la routine appropriée en fonction de vos besoins spécifiques en matière de soins de la peau :\n- La routine Novage+ Lisse les rides : Cible les rides et les ridules profondes.\n- Routine Novage+ Lift + Firm : Répond à la perte d\'élasticité et de fermeté.\n- La routine Novage+ Bright Intense : Se concentre sur l\'hyperpigmentation, les taches sombres et le teint inégal.\n- Routine Novage+ Blemish & Age Defy (anti-imperfections et anti-âge) : Conçue pour les peaux sujettes aux imperfections et aux problèmes de vieillissement.\n- NovAge Skin Relief : Spécifiquement formulé pour les peaux sensibles.\n- NovAge Time Restore : Idéal pour les peaux matures ou post-ménopausées.\n- NovAge Men : Conçu pour répondre aux besoins spécifiques de la peau masculine.\n\n4. Quand les résultats seront-ils visibles après avoir commencé ma routine Novage+ ?\n\nNovage+ fournit les premiers résultats cliniquement prouvés en seulement 2 semaines, avec des résultats à long terme visibles après 6 à 8 semaines d\'utilisation régulière matin et soir. Pour maintenir ces résultats, nous recommandons de poursuivre la routine Novage+.', 'Réponses à vos 10 questions sur Novage+'),
(3, '2023-10-14 02:03:47.000000', '2c4478eb-28a3-4360-acbb-d1366b270599_blog-2.png', NULL, 'Vous aimez les faux cils, mais vous en avez assez de la colle et de la pince à épiler ? Et si vous pouviez profiter de ce look : des cils allongés, recourbés et volumineux, en utilisant simplement du mascara ? Voici quelques conseils pour y parvenir !\n\n1. Recourbez-les !\nLe recourbe-cils est une astuce parfois oubliée qui peut faire de vos cils un véritable atout ! En aidant à aérer vos cils et à les recourber, vos cils naturels rivaliseront avec les faux cils en un rien de temps. Dépoussiérez les vôtres, ou investissez dans de nouveaux, et assurez-vous d\'incorporer une pression rapide dans votre ROUTINE DU MATIN.\n\nSi vous voulez y aller à fond, espacez trois boucles sur la longueur de vos cils. Commencez par la base, la plus proche de la paupière, puis faites-en une à mi-hauteur et terminez par les pointes. Tenez 10 secondes à chaque fois. Fixez votre regard avec un peu de mascara et vous apprécierez les compliments tout au long de la journée !\n\n2. Atteignez chaque cil.\nPour un vrai look de faux cils, vous devez vous assurer d\'atteindre chaque cil, tout autour. Le MASCARA BENDABLE 360° de ONE FALSE LASHES a été conçu dans cette optique. La brosse courbée unique vous aide à atteindre chaque cil, vous donnant un look de cils à 360° cliniquement prouvé. *\n\nDe plus, vous ne salirez pas votre paupière lors de l\'application, car il est plus facile que jamais d\'appliquer une couche de mascara sur les cils inférieurs grâce à la brosse spécialement conçue à cet effet.\n\n3. N\'oubliez pas les coins !\nLa brosse du mascara THE ONE False Lashes 360° Bendable est également dotée d\'une pointe de précision spécialement conçue pour vous permettre d\'atteindre les coins et d\'ajouter un petit extra là où vous en avez besoin. Vous pouvez pousser les cils en place et vous assurer que vous obtenez vraiment le look que vous voulez, en inclinant vos cils là où vous le souhaitez.\n\n4. Superposez les couches.\nUne fois que vous êtes satisfaite de votre look de faux cils, vous pouvez superposer les cils supérieurs, les coins extérieurs ou tout ce qui convient à la forme de vos yeux et à l\'espacement des cils. La formule onctueuse permet de superposer les cils sans qu\'ils ne s\'agglutinent ou ne s\'effritent.\n\nEt n\'oubliez pas : une fois que vous avez profité de vos cils toute la journée, n\'oubliez pas de vous démaquiller correctement avant d\'aller vous coucher. Prendre soin de vos cils de manière appropriée est une façon d\'aider vos cils à paraître plus longs, NATURELLEMENT !', 'Comment obtenir un look faux cils avec un simple mascara ?'),
(4, '2023-10-14 02:04:51.000000', '6cde9bf2-a1b5-4efe-bd4c-47d3b439fa68_blog-1.png', NULL, 'Deux masques pouvant être utilisés séparément, l\'un après l\'autre, ou ensemble sur différentes parties du visage.\n\n• Peut être utilisé pour cibler plusieurs problèmes de la peau à la fois.\n\n• Complément efficace et pratique à la routine de soins de la peau.\n\n• Formulé avec des nutriments pour la peau provenant des plantes originaires de la Suède.\n\n• L’utilisation de 2 masques à la fois aide à purifier la peau grasse et à hydrater la peau sèche en même temps.\n\nMasque Hydratant pour le Visage Optimals\nRafraîchissez votre peau déshydratée grâce à ce masque hydratant pour le visage ! À base d\'acide hyaluronique hydratant et de sucres apaisants issus de la framboise, ce masque rafraîchissant aide à restaurer l\'hydratation et l\'éclat de votre peau en seulement 10 minutes.\n\nCalme et adoucit la peau sèche et rugueuse\nTexture gel rafraîchissante qui rafraîchit instantanément\nSans parfum\nLes sucres de la Framboise aident à protéger, à régénérer et à hydrater la peau\nLe petit Acide Hyaluronique peut être facilement absorbé pour lier l\'humidité plus profondément dans la peau\nMasque Purifiant pour le Visage à l\'Argile Optimals\nMasque à l\'argile purifiant en profondeur qui aide à éliminer l\'excès de sébum, la saleté et la pollution de la surface de la peau - pour des pores visiblement réduits et une peau plus claire, éclatante, rafraîchie et confortable.\n\nMétamorphose la peau en seulement 10 minutes\nRéduit immédiatement la tendance au sébum\nTexture argileuse lisse et facile à étaler\nLes agents astringents de l\'Ortie Blanche aident à apaiser et à rééquilibrer la peau grasse \nLe Charbon aide à éliminer les impuretés et à minimiser l\'apparence des pores', 'Purifiez et hydratez les deux à la fois avec les nouveaux masques Optimals !');

-- --------------------------------------------------------

--
-- Structure de la table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `logo` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `brands`
--

INSERT INTO `brands` (`id`, `created_at`, `description`, `logo`, `name`, `src`) VALUES
(3, '2023-10-14 00:54:56.000000', 'Avec NovAge Skinrelief, vous n\'avez pas à éviter les soins anti-âge parce que vous avez la peau sensible. Skinrelief est une routine de soins de la peau spécialement formulée pour vous donner le meilleur des deux mondes ! Il est cliniquement prouvé qu\'il réduit la sensibilité de la peau, atténue efficacement les rides et améliore la fermeté et l\'élasticité de la peau. Aucun compromis, juste une peau jeune, saine et calme.', '5b200380-67f4-4ad8-ad08-af048a50cca7_brand4.png', 'NovAge', NULL),
(4, '2023-10-14 01:24:33.000000', 'Depuis 45 ans, Giordani Gold s’efforce de créer de beaux produits haut de gamme infusés avec les matières premières les plus exclusives au monde. La quête du savoir-faire et de la perfection reflète notre désir de vous aider à vivre votre vie en beauté.', 'a4006204-38ff-4d72-aa4c-eea0177b142d_brand7.png', 'Giordani Gold ', NULL),
(5, '2023-10-14 01:25:59.000000', 'Activҽllҽ vous garde rafraîchie et confiante toute la journée, tous les jours. Sa nouvelle formule innovante intègre la technologie ActiBoost qui s\'active avec le mouvement, libérant de la fraîcheur au moment voulu pour vous permettre de faire face à toutes les situations de la vie.', 'c796f3fb-901a-4179-a04f-9e2022e97d8f_brand2.png', 'Activҽllҽ', NULL),
(6, '2023-10-14 01:26:36.000000', 'Il garde rafraîchie et confiante toute la journée, tous les jours. Sa nouvelle formule innovante intègre la technologie ActiBoost qui s\'active avec le mouvement, libérant de la fraîcheur au moment voulu pour vous permettre de faire face à toutes les situations de la vie.', '06c026f2-c37d-4ab0-b073-f3d7ded7befd_brand5.png', 'Silk Beauty', NULL),
(7, '2023-10-14 01:27:42.000000', 'Une technologie de pointe et les dernières formulations se démarquent de la foule avec des teintes tendances, des gains de haute pigmentation et des produits avec un emballage design et élégant. THE ONE est conçue à Stockholm - l\'une des capitales mondiales de l\'innovation et où naissent les tendances. Exprimez-vous avec une large gamme de produits cosmétiques pour le visage, les yeux, les lèvres et les ongles. De nouvelles nuances élégantes rencontrent des formats innovants.', '1f6306a2-3464-45ce-aa1f-c4ed534165bb_brand6.png', 'the one', NULL),
(8, '2023-10-14 01:28:39.000000', 'Une technologie de pointe et les dernières formulations se démarquent de la foule avec des teintes tendances, des gains de haute pigmentation et des produits avec un emballage design et élégant. THE ONE est conçue à Stockholm - l\'une des capitales mondiales de l\'innovation et où naissent les tendances. Exprimez-vous avec une large gamme de produits cosmétiques pour le visage, les yeux, les lèvres et les ongles. De nouvelles nuances élégantes rencontrent des formats innovants.', '5cf09d4c-9557-4239-a5c6-2817405c90c9_brand1.png', 'Argila', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `carts`
--

CREATE TABLE `carts` (
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sub_amount` decimal(38,2) NOT NULL,
  `user_id` binary(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `catalogues`
--

CREATE TABLE `catalogues` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `catalogue` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `created_at`, `description`, `image`, `name`, `src`) VALUES
(1, '2023-10-13 12:18:04.000000', 'Prenez soin de votre peau avec nos produits de beauté haut de gamme pour une peau éclatante et saine.', '10e26ffe-b58c-42c4-a356-72720d5e6829_cat-1.jpg', ' Soins de la Peau', NULL),
(2, '2023-10-13 12:19:16.000000', 'Découvrez notre gamme de maquillage de qualité supérieure pour sublimer votre beauté naturelle.', '1d34e1cd-30e9-4d90-99cf-3ffca1d71fc5_cat-4.jpg', 'Maquillage', NULL),
(3, '2023-10-13 12:20:39.000000', 'Offrez à vos cheveux le traitement qu\'ils méritent avec nos produits de soins capillaires exceptionnels.', '6163de95-20a5-47c0-a1b2-3d7608808084_cat-3.jpg', 'Cheveux', NULL),
(5, '2023-10-13 12:21:53.000000', 'Trouvez votre parfum signature parmi nos fragrances élégantes et envoûtantes.', '934e2b89-5978-4421-886d-c8cc2d8b6c08_cat-5.jpg', 'Parfums', NULL),
(6, '2023-10-13 12:23:20.000000', 'Chouchoutez votre corps avec nos produits de soins corporels nourrissants et luxueux.', '17a5fbf3-b896-490f-9e31-0f7d96368a88_cat-6.jpg', 'Soins du Corps', NULL),
(7, '2023-10-13 12:24:17.000000', 'Découvrez nos accessoires de beauté élégants et pratiques pour parfaire votre routine de beauté.', '02a1b4cc-cb2f-4239-af02-8800998bc00b_cat-2.jpg', 'Accessoires ', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) NOT NULL,
  `youtube` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `contacts`
--

INSERT INTO `contacts` (`id`, `created_at`, `address`, `email`, `facebook`, `fax`, `instagram`, `mobile`, `youtube`) VALUES
(1, '2023-10-14 01:32:14.000000', '22Q2+62,AV MOHAMMED ES SLAOUI -FES MAROC', 'Contact@artiweb.ma', 'artiweb', '+212 5 32432066', 'artiweb', '0664017447', 'artiweb');

-- --------------------------------------------------------

--
-- Structure de la table `coupons`
--

CREATE TABLE `coupons` (
  `active` bit(1) NOT NULL,
  `coupon_discount` double NOT NULL,
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `user_id` binary(16) DEFAULT NULL,
  `coupon_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `faq_categories`
--

CREATE TABLE `faq_categories` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `faq_items`
--

CREATE TABLE `faq_items` (
  `faq_category_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `answer` text NOT NULL,
  `question` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `flushes`
--

CREATE TABLE `flushes` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `end_date` datetime(6) NOT NULL,
  `start_date` datetime(6) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `flush_items`
--

CREATE TABLE `flush_items` (
  `discount` int(11) NOT NULL,
  `flush_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `benefit` text DEFAULT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ingredients`
--

INSERT INTO `ingredients` (`id`, `created_at`, `benefit`, `description`, `image`, `name`, `src`) VALUES
(2, '2023-10-14 01:10:21.000000', 'Hydratante, apaisante et revitalisante.\nAide à maintenir la barrière protectrice de la peau.\nDes niveaux élevés de composés anti oxydants, y compris les Vitamines E et C, aident à protéger la peau contre les dommages oxydatifs', '\nLes propriétés antimicrobiennes et anti-inflammatoires de la Mauve sont appréciées dans les remèdes à base de plantes et les infusions de thé depuis les temps anciens. La plante comestible pousse à l\'état sauvage en Europe, en Afrique du Nord et en Asie et contient un haut niveau de composés actifs, notamment des flavonoïdes, des flavones, des mucilages, des acides aminés, ainsi que des vitamines anti oxydantes E et C, pour n\'en nommer que quelques-uns! Également prisée en beauté, l\'extrait de la Fleur de Mauve est connu pour ses propriétés hydratantes, revitalisantes et apaisantes, aidant à apaiser et à réconforter la peau.', '6ec11da1-8bae-473b-a2bd-b13d08c244e1_bio1.png', 'La Fleur de Mauve', NULL),
(3, '2023-10-14 01:12:37.000000', 'La Fleur de Sureau est nourrissante, apaisante et protectrice.\nContient des composants anti oxydants qui aident à protéger la peau contre les radicaux libres.\nConnue pour soutenir le fonctionnement de la barrière de la peau pour une peau plus saine.\n', '\nPour de nombreux Suédois, le doux parfum de la Fleur de Sureau est synonyme d\'été, peut-être parce que la fleur aromatique pousse si abondamment dans notre climat doux et parce que nous aimons aussi sa saveur douce et subtile dans les thés, les cordiaux et les desserts d\'été. En beauté, les délicates fleurs blanches regorgent de composants nourrissants pour la peau, notamment des minéraux, des flavonoïdes, des protéines et des vitamines, ce qui en fait un ingrédient de soin de la peau riche mais aussi apaisant.', '67bb4e4c-bcfe-4392-a9b3-7ea13548e420_bio2.png', 'La Fleur de Sureau', NULL),
(4, '2023-10-14 01:13:47.000000', ' nourrissante, apaisante et protectrice.\nContient des composants anti oxydants qui aident à protéger la peau contre les radicaux libres.\nConnue pour soutenir le fonctionnement de la barrière de la peau pour une peau plus saine.\n', '\nPour de nombreux Suédois, le doux parfum de la Fleur de Sureau est synonyme d\'été, peut-être parce que la fleur aromatique pousse si abondamment dans notre climat doux et parce que nous aimons aussi sa saveur douce et subtile dans les thés, les cordiaux et les desserts d\'été. En beauté, les délicates fleurs blanches regorgent de composants nourrissants pour la peau, notamment des minéraux, des flavonoïdes, des protéines et des vitamines, ce qui en fait un ingrédient de soin de la peau riche mais aussi apaisant.', '69d0fff5-b18c-47f2-bde7-f4c2375f674b_bio3.png', 'La Pensée Sauvage', NULL),
(5, '2023-10-14 01:15:25.000000', ' nourrissante, apaisante et protectrice.\nContient des composants anti oxydants qui aident à protéger la peau contre les radicaux libres.\nConnue pour soutenir le fonctionnement de la barrière de la peau pour une peau plus saine.\n', '\nPour de nombreux Suédois, le doux parfum de la Fleur de Sureau est synonyme d\'été, peut-être parce que la fleur aromatique pousse si abondamment dans notre climat doux et parce que nous aimons aussi sa saveur douce et subtile dans les thés, les cordiaux et les desserts d\'été. En beauté, les délicates fleurs blanches regorgent de composants nourrissants pour la peau, notamment des minéraux, des flavonoïdes, des protéines et des vitamines, ce qui en fait un ingrédient de soin de la peau riche mais aussi apaisant.', '49176ae6-df32-491f-9c9f-a8f3ebb7bec8_bio4.png', 'La Groseille Rouge', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient_product`
--

CREATE TABLE `ingredient_product` (
  `ingredient_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ingredient_product`
--

INSERT INTO `ingredient_product` (`ingredient_id`, `product_id`) VALUES
(2, 12),
(5, 13),
(3, 15),
(3, 16),
(3, 18),
(3, 19),
(3, 21),
(4, 22);

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `amount` decimal(38,2) NOT NULL,
  `id` int(11) NOT NULL,
  `order_date` datetime(6) NOT NULL,
  `user_id` binary(16) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `payment_type` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`amount`, `id`, `order_date`, `user_id`, `address`, `payment_type`, `phone`, `status`) VALUES
('418.00', 1, '2023-10-14 12:43:31.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'rue lwafae', 'Paiement en Espèces', '0685939512', 'delivred'),
('130.00', 2, '2023-10-14 12:44:30.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'rue narjis', 'Paiement par Chèque', '0638522256', 'pending'),
('125.00', 3, '2023-10-14 12:45:22.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'quartier el amane ', 'Virement Bancaire', '0565823528', 'pending'),
('120.00', 4, '2023-10-14 12:46:07.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'quartier el amane ', 'Paiement en Espèces', '0563258555', 'delivred'),
('170.00', 5, '2023-10-14 12:47:06.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'quartier el amane ', 'Paiement par Chèque', '0536985252', 'processing'),
('373.75', 6, '2023-10-14 12:47:58.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'quartier saada ', 'Paiement en Espèces', '0686985475', 'pending'),
('108.00', 7, '2023-10-14 12:51:06.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'bensousa', 'Virement Bancaire', '0685958585', 'pending');

-- --------------------------------------------------------

--
-- Structure de la table `order_items`
--

CREATE TABLE `order_items` (
  `amount` decimal(38,2) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `order_items`
--

INSERT INTO `order_items` (`amount`, `order_id`, `product_id`, `quantity`) VALUES
('288.00', 1, 18, 2),
('130.00', 1, 19, 1),
('130.00', 2, 19, 1),
('125.00', 3, 21, 1),
('120.00', 4, 16, 1),
('170.00', 5, 13, 2),
('130.00', 6, 19, 1),
('125.00', 6, 21, 1),
('118.75', 6, 22, 1),
('108.00', 7, 12, 1);

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `brand_id` int(11) DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `flush_discount` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `offer` bit(1) NOT NULL,
  `pack` bit(1) DEFAULT NULL,
  `price` decimal(38,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `how_to_use` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `ingredients` text DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`brand_id`, `discount`, `flush_discount`, `id`, `offer`, `pack`, `price`, `quantity`, `subcategory_id`, `created_at`, `code`, `description`, `how_to_use`, `image`, `ingredients`, `name`, `size`, `status`) VALUES
(3, 10, 0, 12, b'1', b'1', '120.00', 50, 8, '2023-10-14 10:12:26.000000', '111', 'Crème de nuit nourrissante anti-âge pour la peau sensible. Formulée avec la technologie Ultra Calm pour cibler la sensibilité de la peau et un mélange de lipides naturels pour reconstituer la barrière cutanée. Laisse la peau apaisée et confortable pendant votre sommeil. Formule au pH équilibré. Sans parfum. Testée dermatologiquement.', ' suivez ces étapes simples pour nourrir et protéger votre peau. Tout d\'abord, assurez-vous que votre visage est propre et sec. Appliquez ensuite une petite quantité de crème hydratante sur vos doigts. En utilisant de légers mouvements ascendants, massez doucement la crème sur votre visage,', 'f0b7c112-65e7-4602-aa71-999eefcf0cb6_productImage.jpeg', 'AQUA, GLYCERIN, OLEA EUROPAEA FRUIT OIL, BUTYROSPERMUM PARKII BUTTER, CETEARYL GLUCOSIDE, SORBITAN OLIVATE, SODIUM ACRYLATES COPOLYMER, AVENA SATIVA KERNEL OIL, CERA ALBA, ETHYLHEXYLGLYCERIN, LECITHIN, OPHIOPOGON JAPONICUS ROOT EXTRACT, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, MALTODEXTRIN, TOCOPHERYL ACETATE', 'Crème de Nuit NovAge', '123', 'Active'),
(8, 15, 0, 13, b'1', b'0', '100.00', 48, 5, '2023-10-14 10:18:21.000000', '112', 'Crème de nuit nourrissante anti-âge pour la peau sensible. Formulée avec la technologie Ultra Calm pour cibler la sensibilité de la peau et un mélange de lipides naturels pour reconstituer la barrière cutanée. Laisse la peau apaisée et confortable pendant votre sommeil. Formule au pH équilibré. Sans parfum. Testée dermatologiquement.', ' suivez ces étapes simples pour nourrir et protéger votre peau. Tout d\'abord, assurez-vous que votre visage est propre et sec. Appliquez ensuite une petite quantité de crème hydratante sur vos doigts. En utilisant de légers mouvements ascendants, massez doucement la crème sur votre visage,', 'a2463e9a-eaf0-40ab-98d2-c20655329363_productImage (1).jpeg', 'AQUA, GLYCERIN, OLEA EUROPAEA FRUIT OIL, BUTYROSPERMUM PARKII BUTTER, CETEARYL GLUCOSIDE, SORBITAN OLIVATE, SODIUM ACRYLATES COPOLYMER, AVENA SATIVA KERNEL OIL, CERA ALBA, ETHYLHEXYLGLYCERIN, LECITHIN, OPHIOPOGON JAPONICUS ROOT EXTRACT, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, MALTODEXTRIN, TOCOPHERYL ACETATE', 'Crème de Nuit NovAge', '123', 'Active'),
(7, 20, 0, 15, b'1', b'0', '80.00', 50, 8, '2023-10-14 10:20:45.000000', '113', 'Crème de nuit nourrissante anti-âge pour la peau sensible. Formulée avec la technologie Ultra Calm pour cibler la sensibilité de la peau et un mélange de lipides naturels pour reconstituer la barrière cutanée. Laisse la peau apaisée et confortable pendant votre sommeil. Formule au pH équilibré. Sans parfum. Testée dermatologiquement.', ' suivez ces étapes simples pour nourrir et protéger votre peau. Tout d\'abord, assurez-vous que votre visage est propre et sec. Appliquez ensuite une petite quantité de crème hydratante sur vos doigts. En utilisant de légers mouvements ascendants, massez doucement la crème sur votre visage,', 'a2463e9a-eaf0-40ab-98d2-c20655329363_productImage (1).jpeg', 'AQUA, GLYCERIN, OLEA EUROPAEA FRUIT OIL, BUTYROSPERMUM PARKII BUTTER, CETEARYL GLUCOSIDE, SORBITAN OLIVATE, SODIUM ACRYLATES COPOLYMER, AVENA SATIVA KERNEL OIL, CERA ALBA, ETHYLHEXYLGLYCERIN, LECITHIN, OPHIOPOGON JAPONICUS ROOT EXTRACT, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, MALTODEXTRIN, TOCOPHERYL ACETATE', 'Crème Nourrissante pour le Visage Love Nature ', '124', 'Active'),
(3, 20, 0, 16, b'1', b'0', '150.00', 3, 8, '2023-10-14 10:22:43.000000', '114', 'Crème de nuit nourrissante anti-âge pour la peau sensible. Formulée avec la technologie Ultra Calm pour cibler la sensibilité de la peau et un mélange de lipides naturels pour reconstituer la barrière cutanée. Laisse la peau apaisée et confortable pendant votre sommeil. Formule au pH équilibré. Sans parfum. Testée dermatologiquement.', ' suivez ces étapes simples pour nourrir et protéger votre peau. Tout d\'abord, assurez-vous que votre visage est propre et sec. Appliquez ensuite une petite quantité de crème hydratante sur vos doigts. En utilisant de légers mouvements ascendants, massez doucement la crème sur votre visage,', 'adc2098a-c555-48b4-8591-fdcefe8f2bd7_productImage (3).jpeg', 'AQUA, GLYCERIN, OLEA EUROPAEA FRUIT OIL, BUTYROSPERMUM PARKII BUTTER, CETEARYL GLUCOSIDE, SORBITAN OLIVATE, SODIUM ACRYLATES COPOLYMER, AVENA SATIVA KERNEL OIL, CERA ALBA, ETHYLHEXYLGLYCERIN, LECITHIN, OPHIOPOGON JAPONICUS ROOT EXTRACT, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, MALTODEXTRIN, TOCOPHERYL ACETATE', 'Sérum Novage+ Lift + Firm', '124', 'Active'),
(3, 20, 0, 18, b'1', b'0', '180.00', 2, 8, '2023-10-14 10:24:27.000000', '115', 'Un gel légèrement moussant et purifiant aux extraits naturels d\'Abricot et d\'Orange. Conçu pour éliminer l\'excès de sébum et les impuretés et aider à réduire l\'apparence des pores pour laisser votre peau rafraîchie, énergisée et éclatante. Formule biodégradable, sans alcool et sans parabène avec un parfum d\'agrumes exaltant. Testé dermatologiquement. Tout type de peau.', ' suivez ces étapes simples pour nourrir et protéger votre peau. Tout d\'abord, assurez-vous que votre visage est propre et sec. Appliquez ensuite une petite quantité de crème hydratante sur vos doigts. En utilisant de légers mouvements ascendants, massez doucement la crème sur votre visage,', '08cdaf49-1c82-496a-ba5d-1658b5e6b16f_productImage (4).jpeg', 'AQUA, GLYCERIN, OLEA EUROPAEA FRUIT OIL, BUTYROSPERMUM PARKII BUTTER, CETEARYL GLUCOSIDE, SORBITAN OLIVATE, SODIUM ACRYLATES COPOLYMER, AVENA SATIVA KERNEL OIL, CERA ALBA, ETHYLHEXYLGLYCERIN, LECITHIN, OPHIOPOGON JAPONICUS ROOT EXTRACT, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, MALTODEXTRIN, TOCOPHERYL ACETATE', 'Nettoyant Energisant aux Extraits Naturels d’Abricot et d\'Orange Love Nature', '124', 'Active'),
(4, 0, 0, 19, b'1', NULL, '130.00', 52, 9, '2023-10-14 10:46:40.000000', '118', 'L\'éclat du Néroli est la signature de référence d\'un parfum vivace. Cette fleur Italienne classique jette une lueur étincelante de confiance et de vitalité irrésistible et une touche de sophistication facile.', 'Pour utiliser une crème hydratante, suivez ces étapes simples pour nourrir et protéger votre peau. Tout d\'abord, assurez-vous que votre visage est propre et sec. Appliquez ensuite une petite quantité de crème hydratante sur vos doigts. En utilisant de légers mouvements ascendants, massez doucement la crème sur votre visage', '019164aa-85af-4991-931d-578e44321bd1_productImage (5).jpeg', 'ALCOHOL DENAT., AQUA, PARFUM, LIMONENE, PEG-40 HYDROGENATED CASTOR OIL, ETHYLHEXYL METHOXYCINNAMATE, LINALOOL, BENZYL SALICYLATE, ALPHA-ISOMETHYL IONONE, CITRONELLOL, HYDROXYCITRONELLAL, BUTYL METHOXYDIBENZOYLMETHANE, ETHYLHEXYL SALICYLATE, GERANIOL, CITRAL, BHT, PHENOXYETHANOL', 'Eau de Parfum Miss Giordani', '231', 'Active'),
(4, 0, 0, 21, b'1', NULL, '125.00', 4, 9, '2023-10-14 10:52:38.000000', '152', NULL, 'ALCOHOL DENAT., AQUA, PARFUM, BENZYL SALICYLATE, HEXYL CINNAMAL, ALPHA-ISOMETHYL IONONE, COUMARIN, LIMONENE, BUTYL METHOXYDIBENZOYLMETHANE, CITRONELLOL, HYDROXYCITRONELLAL, GERANIOL, PHENOXYETHANOL, CI 16035', '87e082de-6596-4cd0-b1bc-93c84df80a3a_productImage (6).jpeg', 'ALCOHOL DENAT., AQUA, PARFUM, BENZYL SALICYLATE, HEXYL CINNAMAL, ALPHA-ISOMETHYL IONONE, COUMARIN, LIMONENE, BUTYL METHOXYDIBENZOYLMETHANE, CITRONELLOL, HYDROXYCITRONELLAL, GERANIOL, PHENOXYETHANOL, CI 16035', 'Eau de Parfum So Fever Togethe', '50', 'Active'),
(4, 5, 0, 22, b'1', NULL, '125.00', 50, 9, '2023-10-14 10:55:33.000000', '153', 'Respirez l\'élégance contemporaine et vivez une vie plus riche avec le nouveau parfum Trésor. Fabriqué avec le cœur de la fleur d\'oranger que vous connaissez et vous aimez, luxueusement entrelacé de camélia délicat et de jasmin riche pour créer le précieux Accord Or Rose. La touche finale chaleureuse et sensuelle, pour amplifier et élever qui vous êtes, Giordani Gold Essenza Blossom est un Parfum bijou. Richement contenu dans le flacon emblématique avec de véritables détails en or rose 18 carats', 'ALCOHOL DENAT., AQUA, PARFUM, BENZYL SALICYLATE, HEXYL CINNAMAL, ALPHA-ISOMETHYL IONONE, COUMARIN, LIMONENE, BUTYL METHOXYDIBENZOYLMETHANE, CITRONELLOL, HYDROXYCITRONELLAL, GERANIOL, PHENOXYETHANOL, CI 16035', '731f40cd-ab32-4466-9221-5ec5d4ce0822_productImage (7).jpeg', 'ALCOHOL DENAT., AQUA, PARFUM, BENZYL SALICYLATE, HEXYL CINNAMAL, ALPHA-ISOMETHYL IONONE, COUMARIN, LIMONENE, BUTYL METHOXYDIBENZOYLMETHANE, CITRONELLOL, HYDROXYCITRONELLAL, GERANIOL, PHENOXYETHANOL, CI 16035', 'Parfum Giordani Gold Essenza Blossom', '50', 'Active');

-- --------------------------------------------------------

--
-- Structure de la table `reclamations`
--

CREATE TABLE `reclamations` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reclamations`
--

INSERT INTO `reclamations` (`id`, `created_at`, `email`, `message`, `name`) VALUES
(1, '2023-10-14 11:59:32.000000', 'mariam@gmail.com', 'il y a un retard dans la livraison', 'lemiar'),
(2, '2023-10-14 12:00:01.000000', 'mariam@gmail.com', 'i did not expect this size', 'meryem'),
(3, '2023-10-14 12:04:18.000000', 'mariam@gmail.com', 'bad product , iwant to return it', 'meryem');

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `valid` bit(1) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `user_id` binary(16) DEFAULT NULL,
  `review` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `rating`, `valid`, `created_at`, `user_id`, `review`) VALUES
(1, 19, 4, b'1', '2023-10-14 11:38:07.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'j\'ai récemment acheté ce produit et je suis absolument ravi de mon achat. La qualité est exceptionnelle, il est facile à utiliser et répond parfaitement à mes besoins. De plus, son design est élégant. Je recommande vivement ce produit à quiconque recherche une solution fiable et performante.'),
(2, 19, 5, b'0', '2023-10-14 11:38:28.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, ' Je recommande vivement ce produit à quiconque recherche une solution fiable et performante.'),
(3, 19, 4, b'1', '2023-10-14 11:41:15.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, ' est devenu mon préféré. Il offre une couverture parfaite sans paraître lourd, et il tient toute la journée. Ma peau semble naturelle et impeccable. Je l\'adore !'),
(4, 21, 4, b'0', '2023-10-14 12:52:15.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'Ce parfum est tout simplement envoûtant. Les notes sont équilibrées, et il dure toute la journée sans s\'estomper. Chaque fois que je le porte, je reçois des compliments. C\'est un parfum incontournable'),
(5, 21, 4, b'1', '2023-10-14 12:52:26.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, ' C\'est un parfum incontournable'),
(6, 21, 4, b'1', '2023-10-14 12:52:36.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, ' il dure toute la journée sans s\'estomper. Chaque fois que je le porte, je reçois des compliments. C\'est un parfum incontournable'),
(7, 18, 4, b'0', '2023-10-14 12:53:39.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'Cette crème hydratante est un miracle pour ma peau. Elle la laisse douce et hydratée sans être grasse. En plus, son parfum est délicieux. C\'est un incontournable dans ma routine de soins'),
(8, 18, 4, b'1', '2023-10-14 12:53:47.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'Cette crème hydratante est un miracle pour ma peau. Elle la laisse douce et hydratée sans être grasse. En plus, son parfum est délicieux. '),
(9, 18, 4, b'1', '2023-10-14 12:53:58.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, '. C\'est un incontournable dans ma routine de soins'),
(10, 18, 3, b'0', '2023-10-14 12:54:11.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'pas mal '),
(11, 18, 2, b'1', '2023-10-14 12:54:28.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'i did not like it'),
(12, 18, 1, b'1', '2023-10-14 12:54:41.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'bad product honestly'),
(13, 18, 1, b'1', '2023-10-14 12:54:57.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, ' son parfum est délicieux. C\'est un incontournable dans ma routine de soins'),
(14, 15, 4, b'0', '2023-10-14 12:55:18.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'Cette crème hydratante est un miracle pour ma peau. Elle la laisse douce et hydratée sans être grasse. En plus, son parfum est délicieux. C\'est un incontournable dans ma routine de soins'),
(15, 15, 4, b'1', '2023-10-14 12:55:25.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, '. C\'est un incontournable dans ma routine de soins');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `created_at` datetime(6) DEFAULT NULL,
  `role_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`created_at`, `role_name`) VALUES
(NULL, 'Admin'),
(NULL, 'User');

-- --------------------------------------------------------

--
-- Structure de la table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `category_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sub_categories`
--

INSERT INTO `sub_categories` (`category_id`, `id`, `created_at`, `description`, `name`) VALUES
(1, 1, '2023-10-13 12:27:15.000000', 'Hydratez en profondeur votre peau avec nos hydratants riches et nourrissants, pour un teint lumineux.', 'Hydratants'),
(1, 2, '2023-10-13 12:27:39.000000', 'Retrouvez la jeunesse de votre peau avec nos produits anti-âge avancés, conçus pour réduire les signes de l\'âge.', 'Anti-Âge'),
(1, 3, '2023-10-13 12:31:26.000000', 'Offrez à votre peau des soins en profondeur avec nos masques et traitements revitalisants.', 'Masques '),
(1, 4, '2023-10-13 12:31:53.000000', 'Protégez votre peau des rayons nocifs du soleil avec nos produits de protection solaire efficaces.', 'Protection Solaire'),
(1, 5, '2023-10-13 12:34:12.000000', 'Adoptez une approche naturelle avec nos produits de soin de la peau à base d\'ingrédients naturels.', ' Soins Naturels'),
(1, 6, '2023-10-13 12:35:06.000000', 'Des soins de la peau adaptés aux besoins des hommes, pour une peau saine et éclatante.', 'Soins pour Hommes'),
(1, 7, '2023-10-13 12:35:53.000000', 'Des soins de la peau adaptés aux besoins des hommes, pour une peau saine et éclatante.', 'Routine'),
(1, 8, '2023-10-14 00:50:36.000000', 'Trouvez votre meilleur hydratant parmi notre sélection de crèmes de jour, crèmes de nuit, crèmes BB & CC, baumes à lèvres et crèmes pour le cou et le décolleté.', 'crèmes hydratantes'),
(5, 9, '2023-10-14 10:38:34.000000', 'Les parfums pour femmes offrent une symphonie envoûtante de notes florales, fruitées et orientales, capturant l\'essence de l\'élégance et de la séduction. Ils créent une aura parfumée qui sublime la féminité et laisse une empreinte mémorable.', 'femme');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `created_at` datetime(6) DEFAULT NULL,
  `id` binary(16) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`created_at`, `id`, `city`, `country`, `email`, `first_name`, `gender`, `last_name`, `password`, `phone`) VALUES
('2023-10-14 11:26:06.000000', 0x65969e4b7ad84b66af7ac1de0416e53f, 'fes', 'maroc', 'hammani@gmail.com', 'mariam', 'F', 'lemiar', '$2a$10$AFO3iJ6pIr4Ao0RRAZ5CfuhJzq7.QJTcL9VbyRfqX4tMVXbcudefC', '0686972531'),
('2023-10-12 22:58:12.000000', 0xcd27aab741224f5184e1645d00c3b6d5, 'fes', 'maroc', 'admin@gmail.com', 'admin1', 'm', 'nom', '$2a$10$UurSP.78fbQWk.9l7nvDV.yfXW4Ci3.Ix9mMUCbKiEn8yVdcY.g6G', '0533443955'),
('2023-10-12 22:58:12.000000', 0xcde6dd178d5b41329f7006f13444e788, 'fes', 'maroc', 'user@gmail.com', 'user1', 'f', 'nom', '$2a$10$/aYCs1cYXL/Abw0fVsOoQe4Ca2e5OJsCDmXNTmAtcJ7j1RApywywi', '0533543955');

-- --------------------------------------------------------

--
-- Structure de la table `user_role`
--

CREATE TABLE `user_role` (
  `user_id` binary(16) NOT NULL,
  `role_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_role`
--

INSERT INTO `user_role` (`user_id`, `role_id`) VALUES
(0xcd27aab741224f5184e1645d00c3b6d5, 'Admin'),
(0xcd27aab741224f5184e1645d00c3b6d5, 'User'),
(0xcde6dd178d5b41329f7006f13444e788, 'User'),
(0x65969e4b7ad84b66af7ac1de0416e53f, 'User');

-- --------------------------------------------------------

--
-- Structure de la table `wishlist`
--

CREATE TABLE `wishlist` (
  `product_id` int(11) NOT NULL,
  `user_id` binary(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `wishlist`
--

INSERT INTO `wishlist` (`product_id`, `user_id`) VALUES
(19, 0x65969e4b7ad84b66af7ac1de0416e53f);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`banner_id`);

--
-- Index pour la table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blog_id`);

--
-- Index pour la table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_oce3937d2f4mpfqrycbr0l93m` (`name`);

--
-- Index pour la table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`product_id`,`user_id`),
  ADD KEY `FKb5o626f86h46m4s7ms6ginnop` (`user_id`);

--
-- Index pour la table `catalogues`
--
ALTER TABLE `catalogues`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_t8o6pivur7nn124jehx7cygw5` (`name`);

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_6k0u49fbxf98q2e4kwrq4jkv6` (`user_id`);

--
-- Index pour la table `faq_categories`
--
ALTER TABLE `faq_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_j09uhgqg74i20fus2ikpe828c` (`name`);

--
-- Index pour la table `faq_items`
--
ALTER TABLE `faq_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9xi8uqi2twg8y4o56idgn3air` (`faq_category_id`);

--
-- Index pour la table `flushes`
--
ALTER TABLE `flushes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `flush_items`
--
ALTER TABLE `flush_items`
  ADD PRIMARY KEY (`flush_id`,`product_id`),
  ADD KEY `FK2lc220htsrvjae69jfi74uhql` (`product_id`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_4synhv0u520ua5vjiqwxf3kf7` (`src`),
  ADD KEY `FKghwsjbjo7mg3iufxruvq6iu3q` (`product_id`);

--
-- Index pour la table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_j6tsl15xx76y4kv41yxr4uxab` (`name`);

--
-- Index pour la table `ingredient_product`
--
ALTER TABLE `ingredient_product`
  ADD KEY `FKbbm1e3wwfapeugsh9sk9ghuqw` (`ingredient_id`),
  ADD KEY `FKse2vnlkix61odtebvjjvf1h2i` (`product_id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`);

--
-- Index pour la table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `FKocimc7dtr037rh4ls4l95nlfi` (`product_id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_57ivhy5aj3qfmdvl6vxdfjs4p` (`code`),
  ADD KEY `FKa3a4mpsfdf4d2y6r8ra3sc8mv` (`brand_id`),
  ADD KEY `FKh7nopotm4ii6cr5np9nhxs4aa` (`subcategory_id`);

--
-- Index pour la table `reclamations`
--
ALTER TABLE `reclamations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpl51cejpw4gy5swfar8br9ngi` (`product_id`),
  ADD KEY `FKcgy7qjc1r99dp117y9en6lxye` (`user_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_name`);

--
-- Index pour la table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjwy7imy3rf6r99x48ydq45otw` (`category_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Index pour la table `user_role`
--
ALTER TABLE `user_role`
  ADD KEY `FKt7e7djp752sqn6w22i6ocqy6q` (`role_id`),
  ADD KEY `FKj345gk1bovqvfame88rcx7yyx` (`user_id`);

--
-- Index pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD KEY `FK6p7qhvy1bfkri13u29x6pu8au` (`product_id`),
  ADD KEY `FKtrd6335blsefl2gxpb8lr0gr7` (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `banners`
--
ALTER TABLE `banners`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `catalogues`
--
ALTER TABLE `catalogues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `faq_categories`
--
ALTER TABLE `faq_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `faq_items`
--
ALTER TABLE `faq_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `flushes`
--
ALTER TABLE `flushes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `reclamations`
--
ALTER TABLE `reclamations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `FKb5o626f86h46m4s7ms6ginnop` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKmd2ap4oxo3wvgkf4fnaye532i` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `coupons`
--
ALTER TABLE `coupons`
  ADD CONSTRAINT `FKhb27gggactdhu0i65fwiaxb0r` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `faq_items`
--
ALTER TABLE `faq_items`
  ADD CONSTRAINT `FK9xi8uqi2twg8y4o56idgn3air` FOREIGN KEY (`faq_category_id`) REFERENCES `faq_categories` (`id`);

--
-- Contraintes pour la table `flush_items`
--
ALTER TABLE `flush_items`
  ADD CONSTRAINT `FK1o4ecyui7056yq4hsjrtatnnm` FOREIGN KEY (`flush_id`) REFERENCES `flushes` (`id`),
  ADD CONSTRAINT `FK2lc220htsrvjae69jfi74uhql` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `FKghwsjbjo7mg3iufxruvq6iu3q` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `ingredient_product`
--
ALTER TABLE `ingredient_product`
  ADD CONSTRAINT `FKbbm1e3wwfapeugsh9sk9ghuqw` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`),
  ADD CONSTRAINT `FKse2vnlkix61odtebvjjvf1h2i` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKocimc7dtr037rh4ls4l95nlfi` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FKa3a4mpsfdf4d2y6r8ra3sc8mv` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `FKh7nopotm4ii6cr5np9nhxs4aa` FOREIGN KEY (`subcategory_id`) REFERENCES `sub_categories` (`id`);

--
-- Contraintes pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FKcgy7qjc1r99dp117y9en6lxye` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKpl51cejpw4gy5swfar8br9ngi` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `FKjwy7imy3rf6r99x48ydq45otw` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `FKj345gk1bovqvfame88rcx7yyx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKt7e7djp752sqn6w22i6ocqy6q` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_name`);

--
-- Contraintes pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `FK6p7qhvy1bfkri13u29x6pu8au` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FKtrd6335blsefl2gxpb8lr0gr7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
