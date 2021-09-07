.. _api_MetaProperty:
MetaProperty Class
================

Inherited: None

.. _api_MetaProperty_description:
Description
-----------

The MetaProperty provides an interface to retrieve information about object property at runtime.

This class is a part of Object-Introspection-Mechanism. MetaProperty provides information about one particular class property. Developers are able to retrieve information about property type, read and write values.

To make properties visible in introspection mechanism, developers must declare those under A_PROPERTIES() macro.



.. _api_MetaProperty_public:
Public Methods
--------------

+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                   | :ref:`MetaProperty<api_MetaProperty_MetaProperty>` (const MetaProperty::Table * table) |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                             :ref:`bool<api_bool>` | :ref:`isValid<api_MetaProperty_isValid>` () const                                      |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                               :ref:`const char<api_const char>` * | :ref:`name<api_MetaProperty_name>` () const                                            |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                       :ref:`Variant<api_Variant>` | :ref:`read<api_MetaProperty_read>` (const void * object) const                         |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`table<api_MetaProperty_table>` () const                                          |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                         :ref:`const MetaType<api_const MetaType>` | :ref:`type<api_MetaProperty_type>` () const                                            |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                             :ref:`void<api_void>` | :ref:`write<api_MetaProperty_write>` (void * object, const Variant & value) const      |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                             :ref:`void<api_void>` | :ref:`write<api_MetaProperty_write>` (void * object, const T & value) const            |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------+

.. _api_MetaProperty_enums:
Public Enums
--------------

.. _api_MetaProperty_AddressMem:
**enum MetaProperty::AddressMem**

.. _api_MetaProperty_ReadMem:
**enum MetaProperty::ReadMem**

Callback which contain address to getter method of property.

.. _api_MetaProperty_ReadProperty:
**enum MetaProperty::ReadProperty**

.. _api_MetaProperty_WriteMem:
**enum MetaProperty::WriteMem**

Callback which contain address to setter method of property.

.. _api_MetaProperty_WriteProperty:
**enum MetaProperty::WriteProperty**



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

:ref:`bool<api_bool>`  **MetaProperty::isValid** () const

Returns true if property is valid; otherwise returns false.

----

.. _api_MetaProperty_name:

:ref:`const char<api_const char>` * **MetaProperty::name** () const

Returns a name of method.

----

.. _api_MetaProperty_read:

:ref:`Variant<api_Variant>`  **MetaProperty::read** (:ref:`void<api_void>` * *object*) const

Returns the value as Variant which contain current property of provided *object*.

----

.. _api_MetaProperty_table:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **MetaProperty::table** () const

Returns property information table.

----

.. _api_MetaProperty_type:

:ref:`const MetaType<api_const MetaType>`  **MetaProperty::type** () const

Returns a type of property.

----

.. _api_MetaProperty_write:

:ref:`void<api_void>`  **MetaProperty::write** (:ref:`void<api_void>` * *object*, :ref:`Variant<api_Variant>` & *value*) const

Tries to write a *value* as Variant to provided *object*.

----

.. _api_MetaProperty_write:

:ref:`void<api_void>`  **MetaProperty::write** (:ref:`void<api_void>` * *object*, :ref:`T<api_T>` & *value*) const

----


