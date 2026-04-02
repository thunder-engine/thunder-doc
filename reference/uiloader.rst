.. _api_UiLoader:

UiLoader
========

Inherited: None

.. _api_UiLoader_description:

Description
-----------

The UiLoader class is tasked with loading user interface (UI) data from a buffer (likely an XML or similar format), managing the UI document, applying styles to the UI elements, and maintaining a hierarchy of widgets. This class appears to be part of a larger UI framework that supports widget-based layouts.



.. _api_UiLoader_public:

Public Methods
--------------

+--------------------------------------+-------------------------------------------------------------------+
|  :ref:`UiDocument<api_UiDocument>` * | :ref:`document<api_UiLoader_f85a17ec>` () const                   |
+--------------------------------------+-------------------------------------------------------------------+
|                                 void | :ref:`documentLoaded<api_UiLoader_9fe7a2c6>` ()                   |
+--------------------------------------+-------------------------------------------------------------------+
|          :ref:`TString<api_TString>` | :ref:`documentStyle<api_UiLoader_5871c0ed>` () const              |
+--------------------------------------+-------------------------------------------------------------------+
|                                 void | :ref:`fromBuffer<api_UiLoader_f08d5eab>` (const TString & buffer) |
+--------------------------------------+-------------------------------------------------------------------+
|                                 void | :ref:`setDocument<api_UiLoader_d41956cb>` (UiDocument * document) |
+--------------------------------------+-------------------------------------------------------------------+
|                                 void | :ref:`setStyleSheet<api_UiLoader_8e2964f3>` (StyleSheet * style)  |
+--------------------------------------+-------------------------------------------------------------------+
|  :ref:`StyleSheet<api_StyleSheet>` * | :ref:`styleSheet<api_UiLoader_10efb9ad>` () const                 |
+--------------------------------------+-------------------------------------------------------------------+



.. _api_UiLoader_static:

Static Methods
--------------

None

.. _api_UiLoader_methods:

Methods Description
-------------------

.. _api_UiLoader_f85a17ec:

 :ref:`UiDocument<api_UiDocument>` * **UiLoader::document** () const

Returns the UiDocument associated with this UiLoader, which contains the structure of the loaded UI.

**See also** setDocument().

----

.. _api_UiLoader_9fe7a2c6:

 void **UiLoader::documentLoaded** ()

Emmits signal when document is loaded.

----

.. _api_UiLoader_5871c0ed:

 :ref:`TString<api_TString>`  **UiLoader::documentStyle** () const

Returns the raw document style (as a string), which was parsed from the UI document.

----

.. _api_UiLoader_f08d5eab:

 void **UiLoader::fromBuffer** (:ref:`TString<api_TString>` & *buffer*)

This function loads the UI data from an XML *buffer* (likely containing UI element definitions and style information).

----

.. _api_UiLoader_d41956cb:

 void **UiLoader::setDocument** (:ref:`UiDocument<api_UiDocument>` * *document*)

Sets the UI *document* to the provided *document* pointer and reloads the UI from the document's data buffer by calling fromBuffer().

**See also** document().

----

.. _api_UiLoader_8e2964f3:

 void **UiLoader::setStyleSheet** (:ref:`StyleSheet<api_StyleSheet>` * *style*)

Sets a *style* sheet to the hierarhy of widgets.

**See also** styleSheet().

----

.. _api_UiLoader_10efb9ad:

 :ref:`StyleSheet<api_StyleSheet>` * **UiLoader::styleSheet** () const

Returns the style sheet assigned to the hierarchy of widgets. This contains the visual styles (like colors, margins, fonts, etc.) that should be applied to the widgets.

**See also** setStyleSheet().


