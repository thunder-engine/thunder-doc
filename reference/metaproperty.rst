.. _api_MetaProperty:

MetaProperty Class
==================

Inherited: None

.. _api_MetaProperty_description:

Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaProperty provides information about one particular class property. Developers are able to retrieve information about property type, read and write values.

To make properties visible in introspection mechanism, developers must declare those under A_PROPERTIES() macro.



.. _api_MetaProperty_public:

Public Methods
--------------

+-------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                             | :ref:`MetaProperty<api_MetaProperty_MetaProperty>` (const MetaProperty::Table * table) |
+-------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                        bool | :ref:`isValid<api_MetaProperty_isValid>` () const                                      |
+-------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                  const char | :ref:`name<api_MetaProperty_name>` () const                                            |
+-------------------------------------------------------------+----------------------------------------------------------------------------------------+
| const :ref:`MetaProperty::Table<api_MetaProperty::Table>` * | :ref:`table<api_MetaProperty_table>` () const                                          |
+-------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                         const :ref:`MetaType<api_MetaType>` | :ref:`type<api_MetaProperty_type>` () const                                            |
+-------------------------------------------------------------+----------------------------------------------------------------------------------------+

.. _api_MetaProperty_enums:

Public Enums
------------

.. _api_MetaProperty_ReadMem:

**enum MetaProperty::ReadMem**

Callback which contain address to getter method of property.

.. _api_MetaProperty_WriteMem:

**enum MetaProperty::WriteMem**

Callback which contain address to setter method of property.



.. _api_MetaProperty_static:

Static Methods
--------------

None

.. _api_MetaProperty_methods:

Methods Description
-------------------

.. _api_MetaProperty_MetaProperty:

**MetaProperty::MetaProperty** (:ref:`MetaProperty::Table<api_MetaProperty::Table>` * *table*)

Constructs MetaProperty object which will contain information provided in a *table*.

----

.. _api_MetaProperty_isValid:

 bool **MetaProperty::isValid** () const

Returns true if property is valid; otherwise returns false.

----

.. _api_MetaProperty_name:

const char **MetaProperty::name** () const

Returns a name of method.

----

.. _api_MetaProperty_table:

const :ref:`MetaProperty::Table<api_MetaProperty::Table>`* **MetaProperty::table** () const

Returns property information table.

----

.. _api_MetaProperty_type:

const :ref:`MetaType<api_MetaType>` **MetaProperty::type** () const

Returns a type of property.


