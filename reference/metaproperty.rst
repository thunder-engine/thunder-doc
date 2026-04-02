.. _api_MetaProperty:

MetaProperty
============

Inherited: None

.. _api_MetaProperty_description:

Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaProperty provides information about one particular class property. Developers are able to retrieve information about property type, read and write values.

To make properties visible in introspection mechanism, developers must declare those under A_PROPERTIES() macro.



.. _api_MetaProperty_public:

Public Methods
--------------

+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                                                            | :ref:`MetaProperty<api_MetaProperty_c708a514>` (const MetaProperty::Table * table) |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                                                       bool | :ref:`isValid<api_MetaProperty_19208e7c>` () const                                 |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                                                 const char | :ref:`name<api_MetaProperty_723f86dc>` () const                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
| const :ref:`MetaProperty::Table<api_MetaProperty_Table>` * | :ref:`table<api_MetaProperty_5e1db7fa>` () const                                   |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                        const :ref:`MetaType<api_MetaType>` | :ref:`type<api_MetaProperty_e35db780>` () const                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------+



.. _api_MetaProperty_static:

Static Methods
--------------

None

.. _api_MetaProperty_methods:

Methods Description
-------------------

.. _api_MetaProperty_c708a514:

**MetaProperty::MetaProperty** (:ref:`MetaProperty::Table<api_MetaProperty_Table>` * *table*)

Constructs MetaProperty object which will contain information provided in a table.

----

.. _api_MetaProperty_19208e7c:

 bool **MetaProperty::isValid** () const

Returns true if property is valid; otherwise returns false.

----

.. _api_MetaProperty_723f86dc:

const char **MetaProperty::name** () const

Returns a name of method.

----

.. _api_MetaProperty_5e1db7fa:

const :ref:`MetaProperty::Table<api_MetaProperty::Table>` * **MetaProperty::table** () const

Returns property information table.

----

.. _api_MetaProperty_e35db780:

const :ref:`MetaType<api_MetaType>`  **MetaProperty::type** () const

Returns a type of property.


