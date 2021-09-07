.. _api_Text:
Text Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Text_description:
Description
-----------

Text file resource.



.. _api_Text_public:
Public Methods
--------------

+-------------------------------------+---------------------------------------------------+
|                                     | :ref:`Text<api_Text_Text>` ()                     |
+-------------------------------------+---------------------------------------------------+
|                                     | :ref:`~Text<api_Text_~Text>` ()                   |
+-------------------------------------+---------------------------------------------------+
|       :ref:`uint8_t<api_uint8_t>` * | :ref:`data<api_Text_data>` () const               |
+-------------------------------------+---------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setSize<api_Text_setSize>` (uint32_t  size) |
+-------------------------------------+---------------------------------------------------+
|       :ref:`uint32_t<api_uint32_t>` | :ref:`size<api_Text_size>` () const               |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`text<api_Text_text>` ()                     |
+-------------------------------------+---------------------------------------------------+



.. _api_Text_static:
Static Methods
--------------

+-------------------------------------------------------------------+-------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Text_methods>` ()       |
+-------------------------------------------------------------------+-------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Text_properties>` () |
+-------------------------------------------------------------------+-------------------------------------------+

.. _api_Text_methods:
Methods Description
-------------------

.. _api_Text_Text:

**Text::Text** ()

Default constructs an instance of Text.

----

.. _api_Text_~Text:

**Text::~Text** ()

Destroys the instance of Text. The destructor is virtual.

----

.. _api_Text_data:

:ref:`uint8_t<api_uint8_t>` * **Text::data** () const

Returns text content as a raw byte array.

----

.. _api_Text_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Text::methods** ()

----

.. _api_Text_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Text::properties** ()

----

.. _api_Text_setSize:

:ref:`void<api_void>`  **Text::setSize** (:ref:`uint32_t<api_uint32_t>`  *size*)

Sets the new *size* of the text resource.

**See also** *size*().

----

.. _api_Text_size:

:ref:`uint32_t<api_uint32_t>`  **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_text:

:ref:`std::string<api_std::string>`  **Text::text** ()

Returns text content as a tring.

----


