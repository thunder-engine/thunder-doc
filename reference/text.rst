.. _api_Text:

Text
====

Inherited: None

.. _api_Text_description:

Description
-----------



.. _api_Text_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------+
|  :ref:`uint8_t<api_uint8_t>` * | :ref:`data<api_Text_29ac04e6>` ()                  |
+--------------------------------+----------------------------------------------------+
|                           void | :ref:`setSize<api_Text_d7ec3b14>` (uint32_t  size) |
+--------------------------------+----------------------------------------------------+
|                       uint32_t | :ref:`size<api_Text_1cae7fd8>` () const            |
+--------------------------------+----------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`text<api_Text_3284d5c9>` ()                  |
+--------------------------------+----------------------------------------------------+



.. _api_Text_static:

Static Methods
--------------

None

.. _api_Text_methods:

Methods Description
-------------------

.. _api_Text_29ac04e6:

 :ref:`uint8_t<api_uint8_t>` * **Text::data** ()

Returns text content as a raw byte array.

----

.. _api_Text_d7ec3b14:

 void **Text::setSize** (uint32_t  *size*)

Sets the new *size* of the text resource.

**See also** *size*().

----

.. _api_Text_1cae7fd8:

 uint32_t **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_3284d5c9:

 :ref:`TString<api_TString>`  **Text::text** ()

Returns text content as string.


