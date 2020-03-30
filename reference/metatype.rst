.. _api_MetaType:
MetaType Class
================

Inherited: None

.. _api_MetaType_description:
Description
-----------

The MetaType provides an interface to retrieve information about data type at runtime.

This class is designed for retrieving of runtime type information with additional functionality.

Some of registered types can be automatically converted to different types with MetaType::convert functunction. The following conversions are predefined:

To convert values to other types developer should define own conversion type function using MetaType::registerConverter() function



.. _api_MetaType_public:
Public Methods
--------------

+-------------------------------------+--------------------------------------------------------------------------------------------+
|                                     | :ref:`MetaType<api_MetaType_MetaType>` (const MetaType::Table * table)                     |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`compare<api_MetaType_compare>` (const void * left, const void * right) const         |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` * | :ref:`construct<api_MetaType_construct>` (void * where, const void * copy = nullptr) const |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` * | :ref:`create<api_MetaType_create>` (const void * copy = nullptr) const                     |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`destroy<api_MetaType_destroy>` (void * data) const                                   |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`destruct<api_MetaType_destruct>` (void * data) const                                 |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isValid<api_MetaType_isValid>` () const                                              |
+-------------------------------------+--------------------------------------------------------------------------------------------+
| :ref:`const char<api_const char>` * | :ref:`name<api_MetaType_name>` () const                                                    |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`size<api_MetaType_size>` () const                                                    |
+-------------------------------------+--------------------------------------------------------------------------------------------+

.. _api_MetaType_static:
Static Methods
--------------

+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`compare<api_MetaType_compare>` (const void * left, const void * right, int  type)                              |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                         :ref:`void<api_void>` * | :ref:`construct<api_MetaType_construct>` (int  type, void * where, const void * copy = nullptr)                      |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`convert<api_MetaType_convert>` (const void * from, int  fromType, void * to, int  toType)                      |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                         :ref:`void<api_void>` * | :ref:`create<api_MetaType_create>` (int  type, const void * copy = nullptr)                                          |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`destroy<api_MetaType_destroy>` (int  type, void * data)                                                        |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`destruct<api_MetaType_destruct>` (int  type, void * data)                                                      |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`hasConverter<api_MetaType_hasConverter>` (int  from, int  to)                                                  |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|             :ref:`const char<api_const char>` * | :ref:`name<api_MetaType_name>` (int  type)                                                                           |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`registerConverter<api_MetaType_registerConverter>` (int  from, int  to, MetaType::converterCallback  function) |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`registerType<api_MetaType_registerType>` (MetaType::Table & )                                                  |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`size<api_MetaType_size>` (int  type)                                                                           |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|   :ref:`MetaType::Table<api_MetaType::Table>` * | :ref:`table<api_MetaType_table>` (int  type)                                                                         |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`type<api_MetaType_type>` (const char * )                                                                       |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`type<api_MetaType_type>` (const int & )                                                                        |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`type<api_MetaType_type>` ()                                                                                    |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
| :ref:`MetaType::TypeMap<api_MetaType::TypeMap>` | :ref:`types<api_MetaType_types>` ()                                                                                  |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`unregisterType<api_MetaType_unregisterType>` (MetaType::Table & table)                                         |
+-------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+

.. _api_MetaType_methods:
Methods Description
-------------------

.. _api_MetaType_MetaType:

**MetaType::MetaType** (:ref:`MetaType::Table<api_MetaType::Table>` * *table*)

Constructs MetaType object wich will contain information provided in a *table*.

----

.. _api_MetaType_compare:

:ref:`bool<api_bool>`  **MetaType::compare** (:ref:`void<api_void>` * *left*, :ref:`void<api_void>` * *right*) const

Returns true in case of *left* value is equal to *right* value; otherwise returns false.

----

.. _api_MetaType_compare:

:ref:`bool<api_bool>`  **MetaType::compare** (:ref:`void<api_void>` * *left*, :ref:`void<api_void>` * *right*, :ref:`int<api_int>`  *type*)

Returns true in case of *left* value is equal to *right* value with *type*; otherwise returns false.

----

.. _api_MetaType_construct:

:ref:`void<api_void>` * **MetaType::construct** (:ref:`void<api_void>` * *where*, :ref:`void<api_void>` * *copy* = nullptr) const

Constructs a value of the given type, wich represented by current MetaType object in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_construct:

:ref:`void<api_void>` * **MetaType::construct** (:ref:`int<api_int>`  *type*, :ref:`void<api_void>` * *where*, :ref:`void<api_void>` * *copy* = nullptr)

Constructs a value of the given *type* in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_convert:

:ref:`bool<api_bool>`  **MetaType::convert** (:ref:`void<api_void>` * *from*, :ref:`int<api_int>`  *fromType*, :ref:`void<api_void>` * *to*, :ref:`int<api_int>`  *toType*)

Tries *to* convert value *from* with type *from*Type *to* type *to*Type and place the result *to* output value *to*. Returns true if conversion succeed; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_create:

:ref:`void<api_void>` * **MetaType::create** (:ref:`void<api_void>` * *copy* = nullptr) const

Returns a *copy* of *copy* value, with type, wich represented by current MetaType object. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_create:

:ref:`void<api_void>` * **MetaType::create** (:ref:`int<api_int>`  *type*, :ref:`void<api_void>` * *copy* = nullptr)

Returns a *copy* of *copy* value, with *type*. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_destroy:

:ref:`void<api_void>`  **MetaType::destroy** (:ref:`void<api_void>` * *data*) const

Destroys the value with type, wich represented by current MetaType object, located at *data*. This function calls delete operator.

----

.. _api_MetaType_destroy:

:ref:`void<api_void>`  **MetaType::destroy** (:ref:`int<api_int>`  *type*, :ref:`void<api_void>` * *data*)

Destroys the value with *type*, located at *data*. This function calls delete operator.

----

.. _api_MetaType_destruct:

:ref:`void<api_void>`  **MetaType::destruct** (:ref:`void<api_void>` * *data*) const

Destructs the value with type, wich represented by current MetaType object, located at *data*. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_destruct:

:ref:`void<api_void>`  **MetaType::destruct** (:ref:`int<api_int>`  *type*, :ref:`void<api_void>` * *data*)

Destructs the value with *type*, located at *data*. Unlike destroy(), this function only invokes the *type*'s destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_hasConverter:

:ref:`bool<api_bool>`  **MetaType::hasConverter** (:ref:`int<api_int>`  *from*, :ref:`int<api_int>`  *to*)

Returns true in case of type *from* can be converted *to* type *to*; otherwise returns false.

----

.. _api_MetaType_isValid:

:ref:`bool<api_bool>`  **MetaType::isValid** () const

Returns true in case of this MetaType object contain valid information; otherwise returns false.

----

.. _api_MetaType_name:

:ref:`const char<api_const char>` * **MetaType::name** () const

Returns the name of type.

----

.. _api_MetaType_name:

:ref:`const char<api_const char>` * **MetaType::name** (:ref:`int<api_int>`  *type*)

Returns a name of *type* with *type* ID. Returns nullptr for unregistered *type*.

----

.. _api_MetaType_registerConverter:

:ref:`bool<api_bool>`  **MetaType::registerConverter** (:ref:`int<api_int>`  *from*, :ref:`int<api_int>`  *to*, :ref:`MetaType::converterCallback<api_MetaType::converterCallback>`  *function*)

Registers the possibility *to* convert value type *from* *to* type *to* with conversion *function*. Returns true in case of converter successfully registered; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_registerType:

:ref:`int<api_int>`  **MetaType::registerType** (:ref:`MetaType::Table<api_MetaType::Table>` & **)

Registers **type **by **type **MetaType::Table **table. **Use **registerMetaType() **instead **this **function. **Returns **an **ID **of **registered **type.

----

.. _api_MetaType_size:

:ref:`int<api_int>`  **MetaType::size** () const

Returns the size of type.

----

.. _api_MetaType_size:

:ref:`int<api_int>`  **MetaType::size** (:ref:`int<api_int>`  *type*)

Returns a size of *type* with *type* ID. Returns 0 for unregistered *type*.

----

.. _api_MetaType_table:

:ref:`MetaType::Table<api_MetaType::Table>` * **MetaType::table** (:ref:`int<api_int>`  *type*)

Returns *type* information table if *type* registered; otherwise returns nullptr.

----

.. _api_MetaType_type:

:ref:`int<api_int>`  **MetaType::type** (:ref:`char<api_char>` * **)

Returns **an **ID **of **type **with **type **name. **Returns **MetaType::INVALID **for **unregistered **type.

----

.. _api_MetaType_type:

:ref:`int<api_int>`  **MetaType::type** (:ref:`int<api_int>` & **)

Returns **an **ID **of **type **with **type **info. **Returns **MetaType::INVALID **for **unregistered **type.

----

.. _api_MetaType_type:

:ref:`int<api_int>`  **MetaType::type** ()

----

.. _api_MetaType_types:

:ref:`MetaType::TypeMap<api_MetaType::TypeMap>`  **MetaType::types** ()

Returns a table of registered types.

----

.. _api_MetaType_unregisterType:

:ref:`void<api_void>`  **MetaType::unregisterType** (:ref:`MetaType::Table<api_MetaType::Table>` & *table*)

Unregisters type by type MetaType::Table *table*. Use unregisterMetaType() instead this function.

----


