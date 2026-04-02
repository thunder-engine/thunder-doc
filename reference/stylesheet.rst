.. _api_StyleSheet:

StyleSheet
==========

Inherited: None

.. _api_StyleSheet_description:

Description
-----------

The StyleSheet class is responsible for handling CSS style rules, which can be applied to Widget objects. It includes functionality for storing, loading, saving, and resolving styles, along with utility methods to convert CSS color and length values.



.. _api_StyleSheet_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`data<api_StyleSheet_09c2845f>` () const                  |
+------------------------------+----------------------------------------------------------------+
|                         void | :ref:`resolve<api_StyleSheet_0a5c192d>` (Widget * widget)      |
+------------------------------+----------------------------------------------------------------+
|                         void | :ref:`setData<api_StyleSheet_54c0b92d>` (const TString & data) |
+------------------------------+----------------------------------------------------------------+



.. _api_StyleSheet_static:

Static Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------------------------------+
|                         void | :ref:`resolveInline<api_StyleSheet_15cf9eab>` (Widget * widget, const TString & style)                         |
+------------------------------+----------------------------------------------------------------------------------------------------------------+
|                         void | :ref:`setStyleProperty<api_StyleSheet_c675019a>` (Widget * widget, const TString & key, const TString & value) |
+------------------------------+----------------------------------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`toColor<api_StyleSheet_043517cb>` (const TString & value)                                                |
+------------------------------+----------------------------------------------------------------------------------------------------------------+
|                        float | :ref:`toLength<api_StyleSheet_0f1374dc>` (const TString & value, bool & pixels)                                |
+------------------------------+----------------------------------------------------------------------------------------------------------------+

.. _api_StyleSheet_methods:

Methods Description
-------------------

.. _api_StyleSheet_09c2845f:

 :ref:`TString<api_TString>`  **StyleSheet::data** () const

Returns content as a string.

**See also** setData().

----

.. _api_StyleSheet_0a5c192d:

 void **StyleSheet::resolve** (:ref:`Widget<api_Widget>` * *widget*)

Resolves the styles for a given *widget* based on the parsed CSS rules. It iterates through the CSS selectors and applies matching rules to the widget.

----

.. _api_StyleSheet_15cf9eab:

 void **StyleSheet::resolveInline** (:ref:`Widget<api_Widget>` * *widget*, :ref:`TString<api_TString>` & *style*)

Resolves inline styles provided as a string (e.g., from the *style* attribute in XML). The method splits the inline styles into key-value pairs and applies them to the widget.

----

.. _api_StyleSheet_54c0b92d:

 void **StyleSheet::setData** (:ref:`TString<api_TString>` & *data*)

Sets a new content data.

**See also** data().

----

.. _api_StyleSheet_c675019a:

 void **StyleSheet::setStyleProperty** (:ref:`Widget<api_Widget>` * *widget*, :ref:`TString<api_TString>` & *key*, :ref:`TString<api_TString>` & *value*)

Directly sets a style property for a widget. It adds the specified *key* and *value* pair to the widget's style rules.

----

.. _api_StyleSheet_043517cb:

 :ref:`Vector4<api_Vector4>`  **StyleSheet::toColor** (:ref:`TString<api_TString>` & *value*)

Converts a CSS color *value* (e.g., named colors like "blue" or hexadecimal colors like "#ff0000") to a Vector4 representing RGBA values. It handles both named colors and hex codes (including short hex formats like #FFF).

----

.. _api_StyleSheet_0f1374dc:

 float **StyleSheet::toLength** (:ref:`TString<api_TString>` & *value*, bool & *pixels*)

Converts a length *value* (e.g., "10px" or "50%") into a numeric *value* and returns whether the *value* is in *pixels* or percentages.


