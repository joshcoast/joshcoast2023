��    r      �      <      <  {   =  �   �     _     s     �  !   �     �     �    �     �	     �	     �	  0   �	  '   
     C
     R
     ^
     o
     �
     �
     �
     �
     �
     �
  /   �
  /   �
  Q   ,  �   ~          3  E   G  `   �  J   �  :   9  p  t  �   �  !   �     �  R   �  M        ]  o   t  �  �  ]   �  %   �  /       4     I     N     g  6   n     �     �  &   �     �               -     ;     U  3  \     �     �     �     �     �  3   �  (        1     @     F     X  7   `  L   �     �  #   �     #     :  1   O     �     �  /   �     �     �       x     k   �        S    �   Z     �     �            P     =   m  9   �     �     �               ,     8     G     Z     i  2   ~     �     �     �     �  	   �  	   �  �  �  �   �  �   &      �      �      !  ,   !     H!     [!  3  d!     �"  	   �"     �"  3   �"  0   �"     #     5#     H#     `#     #     �#     �#     �#     �#     �#  C   �#  H    $  p   i$  �   �$     �%     �%  i   �%  }   U&  i   �&  Q   ='  �  �'  �   $)  *   �)  	   #*  �   -*  u   �*  '   $+  |   L+  �  �+  l   �-  4   5.  :   j.  r  �.     0     0     60  J   =0     �0     �0  &   �0     �0     �0     1     "1  !   11     S1    `1     e2     x2     �2     �2     �2  T   �2  2   3     C3     T3     ]3     s3  M   {3  a   �3  "   +4  6   N4     �4     �4  W   �4  (   5     D5  >   I5     �5  '   �5  	   �5  �   �5  �   �6     7  �  $7  �   �8     f9     l9     �9     �9  b   �9  H   �9  M   F:     �:     �:     �:     �:     �:     ;     ;     ,;     B;  2   W;  "   �;  	   �;     �;     �;  	   �;  	   �;   <a href="https://www.php.net/manual/en/book.exif.php" target="_blank">the PHP EXIF extension</a> is missing on this server! <a href="https://www.php.net/manual/en/ref.simplexml.php" target="_blank">The PHP SimpleXML extension</a> is missing on this server! SVG images can not be displayed! Allow infinite loop Alternative text Arno Welzel Available post types on this site CDN URL prefix CDN mode CDNs usually use "prefix mode" which adds the CDN domain in front of the whole URL. Some CDNs like ExactDN use "pull mode" which means only the domain of the website is replaced by the CDN domain. If images don't show up with the CDN active try another mode. Caption Captions Close (Esc) Close the lightbox by clicking outside the image Close with vertical drag in mobile view Copy image URL Custom link Custom link, URL Custom link, label Default Description Desktop Disable Download image EXIF data if available Enable pinch to close gesture on mobile devices Enable tap to toggle controls on mobile devices Enter a comma separated list of post types where the lightbox should not be used. Enter a comma separated list with the numerical IDs of the pages/posts where the lightbox should not be used. This can also be changed in the page/post itself. Excluded pages/posts Excluded post types Factor by which SVG images get scaled when displayed in the lightbox. Fix links to images which include image sizes (e.g. "image-1024x768.jpg" instead of "image.jpg") Fix links to scaled images (e.g."image.jpg" instead of "image-scaled.jpg") For documentation about hooks, styling etc. please see FAQ For example: if an image is 1000×400 pixels the small version of it should be %d×%d pixels since the smallest registered image size is %d×%d pixels. If a portrait image has 820×1400 pixels the small version should then be %d×%d pixels. The plugin will take rounding errors into account and will also check for images which are one pixel less or more wide or high. For the opening transition of PhotoSwipe the plugin will use a smaller version of the linked image if available. The registered image sizes on this website are as following Full picture size in desktop view General Get the image captions from the database (this may cause delays on slower servers) Hide scrollbars when opening the lightbox (this may not work with your theme) Idle time for controls If you like my WordPress plugins and want to support my work I would be very happy about a donation via PayPal. If you use a CDN plugin which adds an URL prefix in front of the image link, you can add this prefix (including "http://" or "https://") here. You can enter multiple prefixes separated by comma. The image meta data can then be retrieved from the local file and without loading the image from the CDN. You also need this if you want to use image captions from the WordPress database but serve images using a CDN. If you use the JetPack CDN you can leave this setting empty – JetPack is already supported! Ignore links to images on other sites Ignore links to images which contain a hash (#) Image information like size, EXIF data, name of the preview image is cached as WordPress transients. To improve performance with large image galleries you can use caching plugins like <a href="https://wordpress.org/plugins/redis-cache/" target="_blank">Redis Object Cache</a>. Info Lightbox with PhotoSwipe Mobile Mobile options are not yet supported for PhotoSwipe 5. Mouse wheel function New share symbol New share symbol with solid background Next (arrow right) Original Original with solid background Other options PhotoSwipe version to use Pin it Placeholders for the link:<br />{{raw_url}}&nbsp;&ndash;&nbsp;URL of the lightbox<br />{{url}}&nbsp;&ndash;&nbsp;encoded URL of the lightbox<br />{{raw_image_url}}&nbsp;&ndash;&nbsp;URL of the image<br />{{image_url}}&nbsp;&ndash;&nbsp;encoded URL of the image<br />{{text}}&nbsp;&ndash;&nbsp;image caption. Plugin version Prefix Previous (arrow left) Pull SVG scaling factor Scroll zoomed image or close lightbox if not zoomed Scroll zoomed image otherwise do nothing Secondary menu Share Share on Facebook Sharing Sharing options are not yet supported for PhotoSwipe 5. Show WordPress galleries and Gutenberg gallery blocks in separate lightboxes Show caption if available Show date in EXIF data if available Show fullscreen button Show picture counter Show this setting as checkbox in page/post editor Show zoom button if available Skin Space between pictures relative to screenwidth. Spacing between pictures Switch to next/previous picture Thank you :-) The available options depend on the PhotoSwipe version. UI customizations done for version 4 may not work for version 5. The smallest size (%d×%d pixels) will be used to check if a smaller image is available for the transition. Theme This plugin shows all linked pictures in a lightbox based on an extended version of PhotoSwipe. If the lightbox does not open, make sure that images are linked to the media and not to the attachment page. Also make sure that no other lightbox is in use (some themes or gallery plugins bring their own lightbox which needs to be disabled).  Time until the on screen controls will disappear automatically in desktop view. Note: Keeping controls visible is only supported with PhotoSwipe 5. Title Toggle fullscreen Tweet Type of caption Update browser history (going back in the browser will first close the lightbox) Use URL of images instead of lightbox on Facebook and Twitter Use slide animation when switching images in desktop view Used elements Visible elements Visible sharing options Your label here Zoom in/out dynamic, aside dynamic, automatic dynamic, below http://arnowelzel.de https://wordpress.org/plugins/lightbox-photoswipe/ never hide automatically overlay pixels second seconds version 4 version 5 Project-Id-Version: Lightbox with PhotoSwipe
Report-Msgid-Bugs-To: 
POT-Creation-Date: 2022-06-13 09:32+0000
PO-Revision-Date: 2023-01-21 15:08+0000
Last-Translator: Arno Welzel
Language-Team: French (France)
Language: fr_FR
Plural-Forms: nplurals=2; plural=n > 1;
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
X-Generator: Loco https://localise.biz/
X-Loco-Version: 2.6.2; wp-6.0 <a href="https://www.php.net/manual/en/book.exif.php" target="_blank">l&#39;extension PHP EXIF</a> est manquante sur ce serveur! <a href="https://www.php.net/manual/en/ref.simplexml.php" target="_blank">L&#39;extension PHP SimpleXML</a> est manquante sur ce serveur ! Les images SVG ne peuvent pas être affichées! Autoriser la boucle infinie Texte alternatif Arno Welzel Types de publication disponibles sur ce site Préfixe d'URL CDN Mode CDN Les CDN utilisent généralement le "mode préfixe" qui ajoute le domaine CDN devant toute l'URL. Certains CDN comme ExactDN utilisent le "mode pull", ce qui signifie que seul le domaine du site Web est remplacé par le domaine CDN. Si les images ne s'affichent pas avec le CDN actif, essayez un autre mode. Légende Légendes Fermer (Esc) Fermez la lightbox en cliquant en dehors de l'image Fermer avec un glissement vertical en vue mobile Copier l'URL de l'image Lien personnalisé Lien personnalisé, URL Lien personnalisé, étiquette Défaut La description Bureau Désactiver Télécharger l'image Données EXIF si disponibles Activer le geste de pincement pour fermer sur les appareils mobiles Activer le toucher pour basculer les commandes sur les appareils mobiles Entrez une liste de types de publication séparés par des virgules où la lightbox ne doit pas être utilisée. Entrez une liste séparée par des virgules avec les identifiants numériques des pages/articles où la lightbox ne doit pas être utilisée. Cela peut également être modifié dans la page/la publication elle-même. Pages/publications exclues Types de publication exclus Facteur par lequel les images SVG sont mises à l'échelle lorsqu'elles sont affichées dans la lightbox. Corriger les liens vers des images qui incluent des tailles d'image (par exemple "image-1024x768.jpg" au lieu de "image.jpg") Corriger les liens vers des images à l'échelle (par exemple, "image.jpg" au lieu de "image-scaled.jpg") Pour la documentation sur les crochets, le style, etc., veuillez consulter la FAQ Ad esempio: se un'immagine è 1000×400 pixel, la sua versione ridotta dovrebbe essere %d×%d pixel poiché la dimensione minima dell'immagine registrata è %d×%d pixel. Se un'immagine verticale ha 820×1400 pixel, la versione piccola dovrebbe essere %d×%d pixel. Il plug-in terrà conto degli errori di arrotondamento e controllerà anche le immagini che sono larghe o alte un pixel in meno o in più. Per la transizione di apertura di PhotoSwipe, il plug-in utilizzerà una versione più piccola dell'immagine collegata, se disponibile. Le dimensioni delle immagini registrate su questo sito Web sono le seguenti Taille complète de l'image en mode bureau Général Obtenez les légendes des images à partir de la base de données (cela peut entraîner des retards sur les serveurs plus lents) Masquez les barres de défilement lors de l'ouverture de la lightbox (cela peut ne pas fonctionner avec votre thème) Temps d'inactivité pour les contrôles Si vous aimez mes plugins WordPress et que vous souhaitez soutenir mon travail, je serais très heureux d'un don via PayPal. Si vous utilisez un plugin CDN qui ajoute un préfixe d'URL devant le lien de l'image, vous pouvez ajouter ce préfixe (y compris "http://" ou "https://") ici. Vous pouvez saisir plusieurs préfixes séparés par une virgule. Les métadonnées de l'image peuvent alors être récupérées depuis le fichier local et sans charger l'image depuis le CDN. Vous en avez également besoin si vous souhaitez utiliser des légendes d'images de la base de données WordPress mais diffuser des images à l'aide d'un CDN. Si vous utilisez le CDN JetPack, vous pouvez laisser ce paramètre vide - JetPack est déjà pris en charge! Ignorer les liens vers des images sur d'autres sites Ignorer les liens vers des images contenant un hachage (#) Les informations sur l'image telles que la taille, les données EXIF, le nom de l'image d'aperçu sont mises en cache en tant que transitoires WordPress. Pour améliorer les performances avec de grandes galeries d'images, vous pouvez utiliser des plugins de mise en cache comme <a href="https://wordpress.org/plugins/redis-cache/" target="_blank">Redis Object Cache</a>. Info Lightbox avec PhotoSwipe Mobile Les options mobiles ne sont pas encore prises en charge pour PhotoSwipe 5. Fonction molette de la souris Nouveau symbole d'action Nouveau symbole d'action avec fond uni Suivant (flèche droite) Original Original avec fond solide Autres options Version de PhotoSwipe à utiliser Épinglez-le Espaces réservés pour le lien :<br /> {{raw_url}} – URL de la lightbox<br /> {{url}} - URL encodée de la lightbox<br /> {{raw_image_url}} – URL de l&#39;image<br /> {{image_url}} - URL encodée de l&#39;image<br /> {{text}} – légende de l&#39;image. Version du plug-in Préfixe Précédent (flèche gauche) Tirer Facteur d'échelle SVG Faire défiler l'image agrandie ou fermer la lightbox si elle n'a pas été agrandie Faire défiler l'image zoomée sinon ne rien faire Menù secondario Partager Partager sur Facebook Partage Les options de partage ne sont pas encore prises en charge pour PhotoSwipe 5. Afficher les galeries WordPress et les blocs de galeries Gutenberg dans des lightboxes distinctes Afficher la légende si disponible Afficher la date dans les données EXIF si disponibles Afficher le bouton plein écran Afficher le compteur d'images Afficher ce paramètre sous forme de case à cocher dans l'éditeur de page/publication Afficher le bouton de zoom si disponible Peau Espace entre les images par rapport à la largeur de l'écran. Espacement entre les images Passer à l'image suivante/précédente Merci :-) Les options disponibles dépendent de la version de PhotoSwipe. Les personnalisations de l'interface utilisateur effectuées pour la version 4 peuvent ne pas fonctionner pour la version 5. La dimensione più piccola (%d×%d pixel) verrà utilizzata per verificare se è disponibile un'immagine più piccola per la transizione. Thème Ce plugin affiche toutes les images liées dans une lightbox basée sur une version étendue de Photoswipe. Si la visionneuse ne s'ouvre pas, assurez-vous que les images sont liées au média et non à la page de pièce jointe. Assurez-vous également qu'aucune autre lightbox n'est utilisée (certains thèmes ou plugins de galerie apportent leur propre lightbox qui doit être désactivé). Temps jusqu'à ce que les commandes à l'écran disparaissent automatiquement dans la vue du bureau. Remarque : Garder les commandes visibles n'est pris en charge qu'avec PhotoSwipe 5. Titre Passer en plein écran Tweet Type de légende Mettre à jour l'historique du navigateur (revenir dans le navigateur fermera d'abord la lightbox) Utilisez l'URL des images au lieu de la lightbox sur Facebook et Twitter Utiliser l'animation de diapositive lors du changement d'image en mode bureau Éléments utilisés Éléments visibles Options de partage visibles Votre étiquette ici Zoom avant/arrière dynamique, à part dynamique, automatique dynamique, ci-dessous http://arnowelzel.de https://wordpress.org/plugins/lightbox-photoswipe/ ne se cache jamais automatiquement recouvrir pixel seconde secondes Version 4 Version 5 