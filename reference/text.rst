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

+--------------------------------+---------------------------------------------------+
|  :ref:`uint8_t<api_uint8_t>` * | :ref:`data<api_Text_data>` ()                     |
+--------------------------------+---------------------------------------------------+
|                           void | :ref:`setSize<api_Text_setSize>` (uint32_t  size) |
+--------------------------------+---------------------------------------------------+
|  :ref:`uint32_t<api_uint32_t>` | :ref:`size<api_Text_size>` () const               |
+--------------------------------+---------------------------------------------------+
|                    std::string | :ref:`text<api_Text_text>` ()                     |
+--------------------------------+---------------------------------------------------+



.. _api_Text_static:

Static Methods
--------------

None

.. _api_Text_methods:

Methods Description
-------------------

.. _api_Text_data:

 :ref:`uint8_t<api_uint8_t>` * **Text::data** ()

Returns text content as a raw byte array.

----

.. _api_Text_setSize:

 void **Text::setSize** (:ref:`uint32_t<api_uint32_t>`  *size*)

Sets the new *size* of the text resource.

**See also** *size*().

----

.. _api_Text_size:

 :ref:`uint32_t<api_uint32_t>`  **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_text:

 std::string **Text::text** ()

Returns text content as string.


