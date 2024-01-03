.. _api_MetaEnum:

MetaEnum
========

Inherited: None

.. _api_MetaEnum_description:

Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaEnum provides information about one particular class enumerator.

To make enumerators visible in introspection mechanism, developers must declare those under A_ENUMS() macro.



.. _api_MetaEnum_public:

Public Methods
--------------

+-----------------------------------------------------+------------------------------------------------------------------------+
|                                                     | :ref:`MetaEnum<api_MetaEnum_MetaEnum>` (const MetaEnum::Table * table) |
+-----------------------------------------------------+------------------------------------------------------------------------+
|                                                bool | :ref:`isValid<api_MetaEnum_isValid>` () const                          |
+-----------------------------------------------------+------------------------------------------------------------------------+
|                                          const char | :ref:`key<api_MetaEnum_key>` (int  index) const                        |
+-----------------------------------------------------+------------------------------------------------------------------------+
|                                                 int | :ref:`keyCount<api_MetaEnum_keyCount>` () const                        |
+-----------------------------------------------------+------------------------------------------------------------------------+
|                                          const char | :ref:`name<api_MetaEnum_name>` () const                                |
+-----------------------------------------------------+------------------------------------------------------------------------+
| const :ref:`MetaEnum::Table<api_MetaEnum::Table>` * | :ref:`table<api_MetaEnum_table>` () const                              |
+-----------------------------------------------------+------------------------------------------------------------------------+
|                                                 int | :ref:`value<api_MetaEnum_value>` (int  index) const                    |
+-----------------------------------------------------+------------------------------------------------------------------------+



.. _api_MetaEnum_static:

Static Methods
--------------

None

.. _api_MetaEnum_methods:

Methods Description
-------------------

.. _api_MetaEnum_MetaEnum:

**MetaEnum::MetaEnum** (:ref:`MetaEnum::Table<api_MetaEnum::Table>` * *table*)

Constructs MetaEnum object which will contain information provided in a *table*.

----

.. _api_MetaEnum_isValid:

 bool **MetaEnum::isValid** () const

Returns true if enumerator is valid; otherwise returns false.

----

.. _api_MetaEnum_key:

const char **MetaEnum::key** (int  *index*) const

Returns the key with the given *index*, or nullptr if no such key exists.

----

.. _api_MetaEnum_keyCount:

 int **MetaEnum::keyCount** () const

Returns the number of keys.

----

.. _api_MetaEnum_name:

const char **MetaEnum::name** () const

Returns a name of enumerator.

----

.. _api_MetaEnum_table:

const :ref:`MetaEnum::Table<api_MetaEnum::Table>`* **MetaEnum::table** () const

Returns enumerator information table.

----

.. _api_MetaEnum_value:

 int **MetaEnum::value** (int  *index*) const

Returns the value with the given *index*; or returns -1 if there is no such value.


