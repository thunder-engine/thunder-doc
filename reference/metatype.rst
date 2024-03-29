.. _api_MetaType:

MetaType
========

Inherited: None

.. _api_MetaType_description:

Description
-----------

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

+------------+--------------------------------------------------------------------------------------------+
|            | :ref:`MetaType<api_MetaType_MetaType>` (const MetaType::Table * table)                     |
+------------+--------------------------------------------------------------------------------------------+
|       bool | :ref:`compare<api_MetaType_compare>` (const void * left, const void * right) const         |
+------------+--------------------------------------------------------------------------------------------+
|       void | :ref:`construct<api_MetaType_construct>` (void * where, const void * copy = nullptr) const |
+------------+--------------------------------------------------------------------------------------------+
|       void | :ref:`create<api_MetaType_create>` (const void * copy = nullptr) const                     |
+------------+--------------------------------------------------------------------------------------------+
|       void | :ref:`destroy<api_MetaType_destroy>` (void * data) const                                   |
+------------+--------------------------------------------------------------------------------------------+
|       void | :ref:`destruct<api_MetaType_destruct>` (void * data) const                                 |
+------------+--------------------------------------------------------------------------------------------+
|        int | :ref:`flags<api_MetaType_flags>` () const                                                  |
+------------+--------------------------------------------------------------------------------------------+
|       bool | :ref:`isValid<api_MetaType_isValid>` () const                                              |
+------------+--------------------------------------------------------------------------------------------+
| const char | :ref:`name<api_MetaType_name>` () const                                                    |
+------------+--------------------------------------------------------------------------------------------+
|        int | :ref:`size<api_MetaType_size>` () const                                                    |
+------------+--------------------------------------------------------------------------------------------+

.. _api_MetaType_enums:

Public Enums
------------

.. _api_MetaType_converterCallback:

**enum MetaType::converterCallback**

Callback which contain address to converter function. This converter must be able to convert from value with fromType type to to value with type represented by this MetaType.



.. _api_MetaType_static:

Static Methods
--------------

+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`compare<api_MetaType_compare>` (const void * left, const void * right, int  type)                              |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`construct<api_MetaType_construct>` (int  type, void * where, const void * copy = nullptr)                      |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`convert<api_MetaType_convert>` (const void * from, int  fromType, void * to, int  toType)                      |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`create<api_MetaType_create>` (int  type, const void * copy = nullptr)                                          |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`destroy<api_MetaType_destroy>` (int  type, void * data)                                                        |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`destruct<api_MetaType_destruct>` (int  type, void * data)                                                      |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`hasConverter<api_MetaType_hasConverter>` (int  from, int  to)                                                  |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                       const char | :ref:`name<api_MetaType_name>` (int  type)                                                                           |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`registerConverter<api_MetaType_registerConverter>` (int  from, int  to, MetaType::converterCallback  function) |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`registerType<api_MetaType_registerType>` (MetaType::Table & )                                                  |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`size<api_MetaType_size>` (int  type)                                                                           |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|    :ref:`MetaType::Table<api_MetaType::Table>` * | :ref:`table<api_MetaType_table>` (int  type)                                                                         |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`type<api_MetaType_type>` (const char * )                                                                       |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`type<api_MetaType_type>` (const type_info & )                                                                  |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                        template <typename T> int | :ref:`type<api_MetaType_type>` ()                                                                                    |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`MetaType::TypeMap<api_MetaType::TypeMap>` | :ref:`types<api_MetaType_types>` ()                                                                                  |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`unregisterType<api_MetaType_unregisterType>` (MetaType::Table & table)                                         |
+--------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+

.. _api_MetaType_methods:

Methods Description
-------------------

.. _api_MetaType_MetaType:

**MetaType::MetaType** (:ref:`MetaType::Table<api_MetaType::Table>` * *table*)

Constructs MetaType object which will contain information provided in a *table*.

----

.. _api_MetaType_compare:

 bool **MetaType::compare** (void * *left*, void * *right*) const

Returns true in case of *left* value is equal to *right* value; otherwise returns false.

----

.. _api_MetaType_compare:

 bool **MetaType::compare** (void * *left*, void * *right*, int  *type*)

Returns true in case of *left* value is equal to *right* value with *type*; otherwise returns false.

----

.. _api_MetaType_construct:

 void **MetaType::construct** (void * *where*, void * *copy* = nullptr) const

Constructs a value of the given type, which represented by current MetaType object in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_construct:

 void **MetaType::construct** (int  *type*, void * *where*, void * *copy* = nullptr)

Constructs a value of the given *type* in the existing memory addressed by *where*, that is a *copy* of *copy*, and returns *where*. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_convert:

 bool **MetaType::convert** (void * *from*, int  *fromType*, void * *to*, int  *toType*)

Tries *to* convert value *from* with type *from*Type *to* type *to*Type and place the result *to* output value *to*. Returns true if conversion succeed; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_create:

 void **MetaType::create** (void * *copy* = nullptr) const

Returns a *copy* of *copy* value, with type, which represented by current MetaType object. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_create:

 void **MetaType::create** (int  *type*, void * *copy* = nullptr)

Returns a *copy* of *copy* value, with *type*. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_destroy:

 void **MetaType::destroy** (void * *data*) const

Destroys the value with type, which represented by current MetaType object, located at *data*. This function calls delete operator.

----

.. _api_MetaType_destroy:

 void **MetaType::destroy** (int  *type*, void * *data*)

Destroys the value with *type*, located at *data*. This function calls delete operator.

----

.. _api_MetaType_destruct:

 void **MetaType::destruct** (void * *data*) const

Destructs the value with type, which represented by current MetaType object, located at *data*. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_destruct:

 void **MetaType::destruct** (int  *type*, void * *data*)

Destructs the value with *type*, located at *data*. Unlike destroy(), this function only invokes the *type*'s destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_flags:

 int **MetaType::flags** () const

Returns flags for the type.

----

.. _api_MetaType_hasConverter:

 bool **MetaType::hasConverter** (int  *from*, int  *to*)

Returns true in case of type *from* can be converted *to* type *to*; otherwise returns false.

----

.. _api_MetaType_isValid:

 bool **MetaType::isValid** () const

Returns true in case of this MetaType object contain valid information; otherwise returns false.

----

.. _api_MetaType_name:

const char **MetaType::name** () const

Returns the name of type.

----

.. _api_MetaType_name:

const char **MetaType::name** (int  *type*)

Returns a name of *type* with *type* ID. Returns nullptr for unregistered *type*.

----

.. _api_MetaType_registerConverter:

 bool **MetaType::registerConverter** (int  *from*, int  *to*, :ref:`MetaType::converterCallback<api_MetaType::converterCallback>`  *function*)

Registers the possibility *to* convert value type *from* *to* type *to* with conversion *function*. Returns true in case of converter successfully registered; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_registerType:

 int **MetaType::registerType** (:ref:`MetaType::Table<api_MetaType::Table>` & **)

Registers type by type MetaType::Table table. Use registerMetaType() instead this function. Returns an ID of registered type.

----

.. _api_MetaType_size:

 int **MetaType::size** () const

Returns the size of type.

----

.. _api_MetaType_size:

 int **MetaType::size** (int  *type*)

Returns a size of *type* with *type* ID. Returns 0 for unregistered *type*.

----

.. _api_MetaType_table:

 :ref:`MetaType::Table<api_MetaType::Table>`* **MetaType::table** (int  *type*)

Returns *type* information table if *type* registered; otherwise returns nullptr.

----

.. _api_MetaType_type:

 int **MetaType::type** (char * **)

Returns an ID of type with type name. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_type:

 int **MetaType::type** (:ref:`type_info<api_type_info>` & **)

Returns an ID of type with type info. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_type:

template <typename T> int **MetaType::type** ()

Returns the type ID for type T.

----

.. _api_MetaType_types:

 :ref:`MetaType::TypeMap<api_MetaType::TypeMap>` **MetaType::types** ()

Returns a table of registered types.

----

.. _api_MetaType_unregisterType:

 void **MetaType::unregisterType** (:ref:`MetaType::Table<api_MetaType::Table>` & *table*)

Unregisters type by type MetaType::Table *table*. Use unregisterMetaType() instead this function.


