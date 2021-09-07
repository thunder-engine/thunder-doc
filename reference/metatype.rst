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


 TypeConvert to
MetaType::BOOLEANMetaType::INTEGER, MetaType::FLOAT, MetaType::STRING
MetaType::INTEGERMetaType::BOOLEAN, MetaType::FLOAT, MetaType::STRING, MetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::FLOATMetaType::BOOLEAN, MetaType::INTEGER, MetaType::STRING, MetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::STRINGMetaType::BOOLEAN, MetaType::INTEGER, MetaType::FLOAT
MetaType::VARIANTMAP
MetaType::VARIANTLISTMetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4, MetaType::MATRIX3, MetaType::MATRIX4, MetaType::QUATERNION
MetaType::VECTOR2MetaType::VARIANTLIST, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::VECTOR3MetaType::VARIANTLIST, MetaType::VECTOR4
MetaType::VECTOR4MetaType::VARIANTLIST
MetaType::QUATERNIONMetaType::VARIANTLIST
MetaType::MATRIX3MetaType::VARIANTLIST
MetaType::MATRIX4MetaType::VARIANTLIST


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
|                 :ref:`int<api_int>` | :ref:`flags<api_MetaType_flags>` () const                                                  |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isValid<api_MetaType_isValid>` () const                                              |
+-------------------------------------+--------------------------------------------------------------------------------------------+
| :ref:`const char<api_const char>` * | :ref:`name<api_MetaType_name>` () const                                                    |
+-------------------------------------+--------------------------------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`size<api_MetaType_size>` () const                                                    |
+-------------------------------------+--------------------------------------------------------------------------------------------+

.. _api_MetaType_enums:
Public Enums
--------------

.. _api_MetaType_Flags:
**enum MetaType::Flags**

.. _api_MetaType_Type:
**enum MetaType::Type**

.. _api_MetaType_TypeMap:
**enum MetaType::TypeMap**

.. _api_MetaType_converterCallback:
**enum MetaType::converterCallback**

Callback which contain address to converter function. This converter must be able to convert from value with fromType type to to value with type represented by this MetaType.



.. _api_MetaType_static:
Static Methods
--------------

+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`compare<api_MetaType_compare>` (const void * left, const void * right, uint32_t  type)                                   |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                         :ref:`void<api_void>` * | :ref:`construct<api_MetaType_construct>` (uint32_t  type, void * where, const void * copy = nullptr)                           |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`convert<api_MetaType_convert>` (const void * from, uint32_t  fromType, void * to, uint32_t  toType)                      |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                         :ref:`void<api_void>` * | :ref:`create<api_MetaType_create>` (uint32_t  type, const void * copy = nullptr)                                               |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`destroy<api_MetaType_destroy>` (uint32_t  type, void * data)                                                             |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`destruct<api_MetaType_destruct>` (uint32_t  type, void * data)                                                           |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`hasConverter<api_MetaType_hasConverter>` (uint32_t  from, uint32_t  to)                                                  |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`const char<api_const char>` * | :ref:`name<api_MetaType_name>` (uint32_t  type)                                                                                |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`registerConverter<api_MetaType_registerConverter>` (uint32_t  from, uint32_t  to, MetaType::converterCallback  function) |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`uint32_t<api_uint32_t>` | :ref:`registerType<api_MetaType_registerType>` (MetaType::Table & table)                                                       |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`size<api_MetaType_size>` (uint32_t  type)                                                                                |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|   :ref:`MetaType::Table<api_MetaType::Table>` * | :ref:`table<api_MetaType_table>` (uint32_t  type)                                                                              |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`uint32_t<api_uint32_t>` | :ref:`type<api_MetaType_type>` (const char * name)                                                                             |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`uint32_t<api_uint32_t>` | :ref:`type<api_MetaType_type>` (const type_info & type)                                                                        |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`uint32_t<api_uint32_t>` | :ref:`type<api_MetaType_type>` ()                                                                                              |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| :ref:`MetaType::TypeMap<api_MetaType::TypeMap>` | :ref:`types<api_MetaType_types>` ()                                                                                            |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`unregisterType<api_MetaType_unregisterType>` (MetaType::Table & table)                                                   |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+

.. _api_MetaType_methods:
Methods Description
-------------------

.. _api_MetaType_MetaType:

**MetaType::MetaType** (:ref:`MetaType::Table<api_MetaType::Table>` * *table*)

Constructs MetaType object which will contain information provided in a *table*.

----

.. _api_MetaType_compare:

:ref:`bool<api_bool>`  **MetaType::compare** (:ref:`void<api_void>` * *left*, :ref:`void<api_void>` * *right*) const

Returns true in case of *left* value is equal to *right* value; otherwise returns false.

----

.. _api_MetaType_compare:

:ref:`bool<api_bool>`  **MetaType::compare** (:ref:`void<api_void>` * *left*, :ref:`void<api_void>` * *right*, :ref:`uint32_t<api_uint32_t>`  *type*)

Returns true in case of *left* value is equal to *right* value with *type*; otherwise returns false.

----

.. _api_MetaType_construct:

:ref:`void<api_void>` * **MetaType::construct** (:ref:`void<api_void>` * *where*, :ref:`void<api_void>` * *copy* = nullptr) const

Constructs a value of the given type, which represented by current MetaType object in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_construct:

:ref:`void<api_void>` * **MetaType::construct** (:ref:`uint32_t<api_uint32_t>`  *type*, :ref:`void<api_void>` * *where*, :ref:`void<api_void>` * *copy* = nullptr)

Constructs a value of the given *type* in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_convert:

:ref:`bool<api_bool>`  **MetaType::convert** (:ref:`void<api_void>` * *from*, :ref:`uint32_t<api_uint32_t>`  *fromType*, :ref:`void<api_void>` * *to*, :ref:`uint32_t<api_uint32_t>`  *toType*)

Tries *to* convert value *from* with type *from*Type *to* type *to*Type and place the result *to* output value *to*. Returns true if conversion succeed; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_create:

:ref:`void<api_void>` * **MetaType::create** (:ref:`void<api_void>` * *copy* = nullptr) const

Returns a *copy* of *copy* value, with type, which represented by current MetaType object. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_create:

:ref:`void<api_void>` * **MetaType::create** (:ref:`uint32_t<api_uint32_t>`  *type*, :ref:`void<api_void>` * *copy* = nullptr)

Returns a *copy* of *copy* value, with *type*. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_destroy:

:ref:`void<api_void>`  **MetaType::destroy** (:ref:`void<api_void>` * *data*) const

Destroys the value with type, which represented by current MetaType object, located at *data*. This function calls delete operator.

----

.. _api_MetaType_destroy:

:ref:`void<api_void>`  **MetaType::destroy** (:ref:`uint32_t<api_uint32_t>`  *type*, :ref:`void<api_void>` * *data*)

Destroys the value with *type*, located at *data*. This function calls delete operator.

----

.. _api_MetaType_destruct:

:ref:`void<api_void>`  **MetaType::destruct** (:ref:`void<api_void>` * *data*) const

Destructs the value with type, which represented by current MetaType object, located at *data*. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_destruct:

:ref:`void<api_void>`  **MetaType::destruct** (:ref:`uint32_t<api_uint32_t>`  *type*, :ref:`void<api_void>` * *data*)

Destructs the value with *type*, located at *data*. Unlike destroy(), this function only invokes the *type*'s destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_flags:

:ref:`int<api_int>`  **MetaType::flags** () const

Returns flags for the type.

----

.. _api_MetaType_hasConverter:

:ref:`bool<api_bool>`  **MetaType::hasConverter** (:ref:`uint32_t<api_uint32_t>`  *from*, :ref:`uint32_t<api_uint32_t>`  *to*)

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

:ref:`const char<api_const char>` * **MetaType::name** (:ref:`uint32_t<api_uint32_t>`  *type*)

Returns a name of *type* with *type* ID. Returns nullptr for unregistered *type*.

----

.. _api_MetaType_registerConverter:

:ref:`bool<api_bool>`  **MetaType::registerConverter** (:ref:`uint32_t<api_uint32_t>`  *from*, :ref:`uint32_t<api_uint32_t>`  *to*, :ref:`MetaType::converterCallback<api_MetaType::converterCallback>`  *function*)

Registers the possibility *to* convert value type *from* *to* type *to* with conversion *function*. Returns true in case of converter successfully registered; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_registerType:

:ref:`uint32_t<api_uint32_t>`  **MetaType::registerType** (:ref:`MetaType::Table<api_MetaType::Table>` & *table*)

Registers type by type MetaType::Table *table*. Use registerMetaType() instead this function. Returns an ID of registered type.

----

.. _api_MetaType_size:

:ref:`int<api_int>`  **MetaType::size** () const

Returns the size of type.

----

.. _api_MetaType_size:

:ref:`int<api_int>`  **MetaType::size** (:ref:`uint32_t<api_uint32_t>`  *type*)

Returns a size of *type* with *type* ID. Returns 0 for unregistered *type*.

----

.. _api_MetaType_table:

:ref:`MetaType::Table<api_MetaType::Table>` * **MetaType::table** (:ref:`uint32_t<api_uint32_t>`  *type*)

Returns *type* information table if *type* registered; otherwise returns nullptr.

----

.. _api_MetaType_type:

:ref:`uint32_t<api_uint32_t>`  **MetaType::type** (:ref:`char<api_char>` * *name*)

Returns an ID of type with type *name*. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_type:

:ref:`uint32_t<api_uint32_t>`  **MetaType::type** (:ref:`type_info<api_type_info>` & *type*)

Returns an ID of *type* with *type* info. Returns MetaType::INVALID for unregistered *type*.

----

.. _api_MetaType_type:

:ref:`uint32_t<api_uint32_t>`  **MetaType::type** ()

----

.. _api_MetaType_types:

:ref:`MetaType::TypeMap<api_MetaType::TypeMap>`  **MetaType::types** ()

Returns a table of registered types.

----

.. _api_MetaType_unregisterType:

:ref:`void<api_void>`  **MetaType::unregisterType** (:ref:`MetaType::Table<api_MetaType::Table>` & *table*)

Unregisters type by type MetaType::Table *table*. Use unregisterMetaType() instead this function.

----


