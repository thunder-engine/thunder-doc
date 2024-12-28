.. _api_Material:

Material
========

Inherited: None

.. _api_Material_description:

Description
-----------



.. _api_Material_public:

Public Methods
--------------

+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`createInstance<api_Material_createInstance>` (Material::SurfaceType  type = SurfaceType::Static) |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`doubleSided<api_Material_doubleSided>` () const                                                  |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`lightModel<api_Material_lightModel>` () const                                                    |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`materialType<api_Material_materialType>` () const                                                |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDoubleSided<api_Material_setDoubleSided>` (bool  flag)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setLightModel<api_Material_setLightModel>` (int  model)                                          |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialType<api_Material_setMaterialType>` (int  type)                                       |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setTexture<api_Material_setTexture>` (const std::string & name, Texture * texture)               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setWireframe<api_Material_setWireframe>` (bool  wireframe)                                       |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`wireframe<api_Material_wireframe>` () const                                                      |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+



.. _api_Material_static:

Static Methods
--------------

None

.. _api_Material_methods:

Methods Description
-------------------

.. _api_Material_createInstance:

 :ref:`MaterialInstance<api_MaterialInstance>` * **Material::createInstance** (:ref:`Material::SurfaceType<api_Material::SurfaceType>`  *type* = SurfaceType::Static)

Returns a new instance for the material with the provided surface *type*.

----

.. _api_Material_doubleSided:

 bool **Material::doubleSided** () const

Returns true if mas marked as double-sided; otherwise returns false.

**See also** setDoubleSided().

----

.. _api_Material_lightModel:

 int **Material::lightModel** () const

Returns current light model for the material. For more detalse please refer to Material::LightModelType enum.

**See also** setLightModel().

----

.. _api_Material_materialType:

 int **Material::materialType** () const

Returns current material type. For more detalse please refer to Material::Type enum.

**See also** setMaterialType().

----

.. _api_Material_setDoubleSided:

 void **Material::setDoubleSided** (bool  *flag*)

Enables or disables the double-sided *flag* for the material.

**See also** doubleSided().

----

.. _api_Material_setLightModel:

 void **Material::setLightModel** (int  *model*)

Sets a new light *model* for the material. For more detalse please refer to Material::LightModelType enum.

**See also** lightModel().

----

.. _api_Material_setMaterialType:

 void **Material::setMaterialType** (int  *type*)

Sets new material *type*. For more detalse please refer to Material::Type enum.

**See also** materialType().

----

.. _api_Material_setTexture:

 void **Material::setTexture** (std::string & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* with a given *name* for the material.

----

.. _api_Material_setWireframe:

 void **Material::setWireframe** (bool  *wireframe*)

Enables or disables a *wireframe* mode for the material.

**See also** *wireframe*().

----

.. _api_Material_wireframe:

 bool **Material::wireframe** () const

Returns true if material must be rendered as wireframe.

**See also** setWireframe().


