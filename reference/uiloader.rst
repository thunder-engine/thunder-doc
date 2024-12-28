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

+--------------------------------------+--------------------------------------------------------------------------+
|  :ref:`UiDocument<api_UiDocument>` * | :ref:`document<api_UiLoader_document>` () const                          |
+--------------------------------------+--------------------------------------------------------------------------+
|                          std::string | :ref:`documentStyle<api_UiLoader_documentStyle>` () const                |
+--------------------------------------+--------------------------------------------------------------------------+
|                                 void | :ref:`fromBuffer<api_UiLoader_fromBuffer>` (const std::string & buffer)  |
+--------------------------------------+--------------------------------------------------------------------------+
|                                 void | :ref:`setStyleSheet<api_UiLoader_setStyleSheet>` (StyleSheet * style)    |
+--------------------------------------+--------------------------------------------------------------------------+
|                                 void | :ref:`setUiDocument<api_UiLoader_setUiDocument>` (UiDocument * document) |
+--------------------------------------+--------------------------------------------------------------------------+
|  :ref:`StyleSheet<api_StyleSheet>` * | :ref:`styleSheet<api_UiLoader_styleSheet>` () const                      |
+--------------------------------------+--------------------------------------------------------------------------+



.. _api_UiLoader_static:

Static Methods
--------------

None

.. _api_UiLoader_methods:

Methods Description
-------------------

.. _api_UiLoader_document:

 :ref:`UiDocument<api_UiDocument>` * **UiLoader::document** () const

Returns the UiDocument associated with this UiLoader, which contains the structure of the loaded UI.

----

.. _api_UiLoader_documentStyle:

 std::string **UiLoader::documentStyle** () const

Returns the raw document style (as a string), which was parsed from the UI document.

----

.. _api_UiLoader_fromBuffer:

 void **UiLoader::fromBuffer** (std::string & *buffer*)

This function loads the UI data from an XML *buffer* (likely containing UI element definitions and style information).

----

.. _api_UiLoader_setStyleSheet:

 void **UiLoader::setStyleSheet** (:ref:`StyleSheet<api_StyleSheet>` * *style*)

Sets a *style* sheet to the hierarhy of widgets.

**See also** *style*Sheet().

----

.. _api_UiLoader_setUiDocument:

 void **UiLoader::setUiDocument** (:ref:`UiDocument<api_UiDocument>` * *document*)

Sets the UI *document* to the provided *document* pointer and reloads the UI from the *document*'s data buffer by calling fromBuffer().

----

.. _api_UiLoader_styleSheet:

 :ref:`StyleSheet<api_StyleSheet>` * **UiLoader::styleSheet** () const

Returns the style sheet assigned to the hierarchy of widgets. This contains the visual styles (like colors, margins, fonts, etc.) that should be applied to the widgets.

**See also** setStyleSheet().


