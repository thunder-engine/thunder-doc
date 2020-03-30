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

+-------------------------+----------------------------------------------+
|                         | :ref:`Text<api_Text_Text>` ()                |
+-------------------------+----------------------------------------------+
|                         | :ref:`~Text<api_Text_~Text>` ()              |
+-------------------------+----------------------------------------------+
| :ref:`char<api_char>` * | :ref:`data<api_Text_data>` () const          |
+-------------------------+----------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setSize<api_Text_setSize>` (int  size) |
+-------------------------+----------------------------------------------+
|     :ref:`int<api_int>` | :ref:`size<api_Text_size>` () const          |
+-------------------------+----------------------------------------------+
|     :ref:`int<api_int>` | :ref:`text<api_Text_text>` ()                |
+-------------------------+----------------------------------------------+

.. _api_Text_static:
Static Methods
--------------

None

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

:ref:`char<api_char>` * **Text::data** () const

Returns text content as a raw byte array.

----

.. _api_Text_setSize:

:ref:`void<api_void>`  **Text::setSize** (:ref:`int<api_int>`  *size*)

Sets the new *size* of the text resource.

**See also** *size*().

----

.. _api_Text_size:

:ref:`int<api_int>`  **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_text:

:ref:`int<api_int>`  **Text::text** ()

Returns text content as a tring.

----


