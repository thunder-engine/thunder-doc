.. _api_Text:

Text
====

Inherited: :ref:`Resource<api_Resource>`

.. _api_Text_description:

Description
-----------



.. _api_Text_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------+
|                      uint8_t | :ref:`data<api_Text_75860dcb>` ()                  |
+------------------------------+----------------------------------------------------+
|                         void | :ref:`setSize<api_Text_a65e91fd>` (uint32_t  size) |
+------------------------------+----------------------------------------------------+
|                     uint32_t | :ref:`size<api_Text_381d2906>` () const            |
+------------------------------+----------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_Text_9a16b3c2>` ()                  |
+------------------------------+----------------------------------------------------+



.. _api_Text_static:

Static Methods
--------------

None

.. _api_Text_methods:

Methods Description
-------------------

.. _api_Text_75860dcb:

 uint8_t **Text::data** ()

Returns text content as a raw byte array.

----

.. _api_Text_a65e91fd:

 void **Text::setSize** (uint32_t  *size*)

Sets the new *size* of the text resource.

**See also** size().

----

.. _api_Text_381d2906:

 uint32_t **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_9a16b3c2:

 :ref:`TString<api_TString>`  **Text::text** ()

Returns text content as string.


