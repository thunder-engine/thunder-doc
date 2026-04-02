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

+------------------------------+----------------------------------------------------+
|                      uint8_t | :ref:`data<api_Text_76bd49fa>` ()                  |
+------------------------------+----------------------------------------------------+
|                         void | :ref:`setSize<api_Text_c1b4d5ef>` (uint32_t  size) |
+------------------------------+----------------------------------------------------+
|                     uint32_t | :ref:`size<api_Text_b058f7a2>` () const            |
+------------------------------+----------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_Text_56b380fd>` ()                  |
+------------------------------+----------------------------------------------------+



.. _api_Text_static:

Static Methods
--------------

None

.. _api_Text_methods:

Methods Description
-------------------

.. _api_Text_76bd49fa:

 uint8_t **Text::data** ()

Returns text content as a raw byte array.

----

.. _api_Text_c1b4d5ef:

 void **Text::setSize** (uint32_t  *size*)

Sets the new *size* of the text resource.

**See also** size().

----

.. _api_Text_b058f7a2:

 uint32_t **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_56b380fd:

 :ref:`TString<api_TString>`  **Text::text** ()

Returns text content as string.


