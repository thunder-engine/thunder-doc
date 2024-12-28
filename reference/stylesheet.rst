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

+--------------+-------------------------------------------------------------------+
|  std::string | :ref:`data<api_StyleSheet_data>` () const                         |
+--------------+-------------------------------------------------------------------+
|         void | :ref:`resolve<api_StyleSheet_resolve>` (Widget * widget)          |
+--------------+-------------------------------------------------------------------+
|         void | :ref:`setData<api_StyleSheet_setData>` (const std::string & data) |
+--------------+-------------------------------------------------------------------+



.. _api_StyleSheet_static:

Static Methods
--------------

+------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                         void | :ref:`resolveInline<api_StyleSheet_resolveInline>` (Widget * widget, const std::string & style)                                |
+------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                         void | :ref:`setStyleProperty<api_StyleSheet_setStyleProperty>` (Widget * widget, const std::string & key, const std::string & value) |
+------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`toColor<api_StyleSheet_toColor>` (const std::string & value)                                                             |
+------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                        float | :ref:`toLength<api_StyleSheet_toLength>` (const std::string & value, bool & pixels)                                            |
+------------------------------+--------------------------------------------------------------------------------------------------------------------------------+

.. _api_StyleSheet_methods:

Methods Description
-------------------

.. _api_StyleSheet_data:

 std::string **StyleSheet::data** () const

Returns content as a string.

**See also** setData().

----

.. _api_StyleSheet_resolve:

 void **StyleSheet::resolve** (:ref:`Widget<api_Widget>` * *widget*)

Resolves the styles for a given *widget* based on the parsed CSS rules. It iterates through the CSS selectors and applies matching rules to the *widget*.

----

.. _api_StyleSheet_resolveInline:

 void **StyleSheet::resolveInline** (:ref:`Widget<api_Widget>` * *widget*, std::string & *style*)

Resolves inline *style*s provided as a string (e.g., from the *style* attribute in XML). The method splits the inline *style*s into key-value pairs and applies them to the *widget*.

----

.. _api_StyleSheet_setData:

 void **StyleSheet::setData** (std::string & *data*)

Sets a new content *data*.

**See also** *data*().

----

.. _api_StyleSheet_setStyleProperty:

 void **StyleSheet::setStyleProperty** (:ref:`Widget<api_Widget>` * *widget*, std::string & *key*, std::string & *value*)

Directly sets a style property for a *widget*. It adds the specified *key* and *value* pair to the *widget*'s style rules.

----

.. _api_StyleSheet_toColor:

 :ref:`Vector4<api_Vector4>`  **StyleSheet::toColor** (std::string & *value*)

Converts a CSS color *value* (e.g., named colors like "blue" or hexadecimal colors like "#ff0000") to a Vector4 representing RGBA *value*s. It handles both named colors and hex codes (including short hex formats like #FFF).

----

.. _api_StyleSheet_toLength:

 float **StyleSheet::toLength** (std::string & *value*, bool & *pixels*)

Converts a length *value* (e.g., "10px" or "50%") into a numeric *value* and returns whether the *value* is in *pixels* or percentages.


