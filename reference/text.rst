.. _api_Text:

Text
====

Inherited: :doc:`Resource<api_Resource>`

.. _api_Text_description:

Description
-----------



.. _api_Text_public:

Public Methods
--------------

+--------------+----------------------------------------------+
|          int | :ref:`data<api_Text_data>` ()                |
+--------------+----------------------------------------------+
|         void | :ref:`setSize<api_Text_setSize>` (int  size) |
+--------------+----------------------------------------------+
|          int | :ref:`size<api_Text_size>` () const          |
+--------------+----------------------------------------------+
|  std::string | :ref:`text<api_Text_text>` ()                |
+--------------+----------------------------------------------+



.. _api_Text_static:

Static Methods
--------------

None

.. _api_Text_methods:

Methods Description
-------------------

.. _api_Text_data:

 int **Text::data** ()

Returns text content as a raw byte array.

----

.. _api_Text_setSize:

 void **Text::setSize** (int  *size*)

Sets the new *size* of the text resource.

**See also** *size*().

----

.. _api_Text_size:

 int **Text::size** () const

Returns size of the text resource.

**See also** setSize().

----

.. _api_Text_text:

 std::string **Text::text** ()

Returns text content as a tring.


