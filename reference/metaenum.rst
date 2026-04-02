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

+----------------------------------------------------+------------------------------------------------------------------------+
|                                                    | :ref:`MetaEnum<api_MetaEnum_ac6e15d7>` (const MetaEnum::Table * table) |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                               bool | :ref:`isValid<api_MetaEnum_613d940a>` () const                         |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                         const char | :ref:`key<api_MetaEnum_cfd64389>` (int  index) const                   |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                                int | :ref:`keyCount<api_MetaEnum_a5183bd4>` () const                        |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                                int | :ref:`keyToValue<api_MetaEnum_f8403692>` (const char * key) const      |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                         const char | :ref:`name<api_MetaEnum_ade6038c>` () const                            |
+----------------------------------------------------+------------------------------------------------------------------------+
| const :ref:`MetaEnum::Table<api_MetaEnum_Table>` * | :ref:`table<api_MetaEnum_b780d596>` () const                           |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                                int | :ref:`value<api_MetaEnum_2af3148d>` (int  index) const                 |
+----------------------------------------------------+------------------------------------------------------------------------+
|                                         const char | :ref:`valueToKey<api_MetaEnum_168b024d>` (int  value) const            |
+----------------------------------------------------+------------------------------------------------------------------------+



.. _api_MetaEnum_static:

Static Methods
--------------

None

.. _api_MetaEnum_methods:

Methods Description
-------------------

.. _api_MetaEnum_ac6e15d7:

**MetaEnum::MetaEnum** (:ref:`MetaEnum::Table<api_MetaEnum_Table>` * *table*)

Constructs MetaEnum object which will contain information provided in a table.

----

.. _api_MetaEnum_613d940a:

 bool **MetaEnum::isValid** () const

Returns true if enumerator is valid; otherwise returns false.

----

.. _api_MetaEnum_cfd64389:

const char **MetaEnum::key** (int  *index*) const

Returns the key with the given index, or nullptr if no such key exists.

----

.. _api_MetaEnum_a5183bd4:

 int **MetaEnum::keyCount** () const

Returns the number of keys.

----

.. _api_MetaEnum_f8403692:

 int **MetaEnum::keyToValue** (char * *key*) const

Returns the integer value of the given enumeration key, or -1 if *key* is not defined

----

.. _api_MetaEnum_ade6038c:

const char **MetaEnum::name** () const

Returns a name of enumerator.

----

.. _api_MetaEnum_b780d596:

const :ref:`MetaEnum::Table<api_MetaEnum::Table>` * **MetaEnum::table** () const

Returns enumerator information table.

----

.. _api_MetaEnum_2af3148d:

 int **MetaEnum::value** (int  *index*) const

Returns the value with the given index; or returns -1 if there is no such value.

----

.. _api_MetaEnum_168b024d:

const char **MetaEnum::valueToKey** (int  *value*) const

Returns the string that is used as the name of the given enumeration value, or nullptr if *value* is not defined.


