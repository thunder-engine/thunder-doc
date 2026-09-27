.. _api_Material:

Material
========

Inherited: :ref:`Resource<api_Resource>`

.. _api_Material_description:

Description
-----------



.. _api_Material_public:

Public Methods
--------------

+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`createInstance<api_Material_097d1f6a>` (Material::SurfaceType  type = SurfaceType::Static) |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`doubleSided<api_Material_e731a2b4>` () const                                               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`layers<api_Material_e95140bc>` () const                                                    |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`lightModel<api_Material_70c8694e>` () const                                                |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`materialType<api_Material_4e1fc690>` () const                                              |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`priority<api_Material_da6428ef>` () const                                                  |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDoubleSided<api_Material_e86097c4>` (bool  flag)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setLightModel<api_Material_02598d4f>` (int  model)                                         |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialType<api_Material_30f81c5e>` (int  type)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setPriority<api_Material_a9bd4106>` (int  priority)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`uniformSize<api_Material_8a4cf917>` () const                                               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_Material_static:

Static Methods
--------------

None

.. _api_Material_methods:

Methods Description
-------------------

.. _api_Material_097d1f6a:

 :ref:`MaterialInstance<api_MaterialInstance>` * **Material::createInstance** (:ref:`Material::SurfaceType<api_Material_SurfaceType>`  *type* = SurfaceType::Static)

Returns a new instance for the material with the provided surface type.

----

.. _api_Material_e731a2b4:

 bool **Material::doubleSided** () const

Returns true if mas marked as double-sided; otherwise returns false.

**See also** setDoubleSided().

----

.. _api_Material_e95140bc:

 int **Material::layers** () const

Returns layers that supported by this material.

----

.. _api_Material_70c8694e:

 int **Material::lightModel** () const

Returns current light model for the material. For more detalse please refer to Material::LightModelType enum.

**See also** setLightModel().

----

.. _api_Material_4e1fc690:

 int **Material::materialType** () const

Returns current material type. For more detalse please refer to Material::Type enum.

**See also** setMaterialType().

----

.. _api_Material_da6428ef:

 int **Material::priority** () const

Returns rendering priority for the material. This parameter is used alpha rendering sorting

**See also** setPriority().

----

.. _api_Material_e86097c4:

 void **Material::setDoubleSided** (bool  *flag*)

Enables or disables the double-sided *flag* for the material.

**See also** doubleSided().

----

.. _api_Material_02598d4f:

 void **Material::setLightModel** (int  *model*)

Sets a new light *model* for the material. For more detalse please refer to Material::LightModelType enum.

**See also** lightModel().

----

.. _api_Material_30f81c5e:

 void **Material::setMaterialType** (int  *type*)

Sets new material type. For more detalse please refer to Material::Type enum.

**See also** materialType().

----

.. _api_Material_a9bd4106:

 void **Material::setPriority** (int  *priority*)

Sets a rendering *priority* for the material. This parameter is used alpha rendering sorting

**See also** priority().

----

.. _api_Material_8a4cf917:

 int **Material::uniformSize** () const

Returns size uniform buffer for single instance. This value can be used as stride for instances.


